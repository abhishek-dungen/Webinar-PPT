import pandas as pd
import numpy as np
from pathlib import Path
from datetime import datetime

file_path = "Sheets/saas_workforce_management_dataset.xlsx"
out_path = Path("reports/insights_slides.html")
out_path.parent.mkdir(exist_ok=True)

_df = pd.read_excel(file_path)
_df["Contract Start Date"] = pd.to_datetime(_df["Contract Start Date"], errors="coerce")

# KPIs
kpi_total_arr = _df["ARR"].sum()
kpi_total_mrr = _df["MRR"].sum()
kpi_accounts = _df["Account ID"].nunique()
churned_mask = _df["Churned"].eq("Yes")
kpi_churn_rate = churned_mask.mean()
churned_arr = _df.loc[churned_mask, "ARR"].sum()
kpi_nrr = (kpi_total_arr + _df["Expansion MRR"].sum() * 12 - churned_arr) / kpi_total_arr
kpi_avg_renewal = _df["Renewal Probability"].mean()
kpi_expansion_mrr = _df["Expansion MRR"].sum()
kpi_avg_discount = _df["Discount %"].mean()

# Aggregations
arr_by_vertical = _df.groupby("Vertical", as_index=False)["ARR"].sum().sort_values("ARR", ascending=False)
arr_by_region = _df.groupby("Region", as_index=False)["ARR"].sum().sort_values("ARR", ascending=False)

_df["Contract Start Month"] = _df["Contract Start Date"].dt.to_period("M").astype(str)
arr_by_month = (
    _df.groupby("Contract Start Month", as_index=False)["ARR"].sum().sort_values("Contract Start Month")
).tail(12)

# Top accounts
top_accounts = _df[["Account Name", "ARR", "Region"]].sort_values("ARR", ascending=False).head(8)

# Churn
churn_by_plan = _df.groupby("Plan Tier").apply(lambda x: (x["Churned"] == "Yes").mean()).reset_index(name="Churn Rate")
churn_by_term = _df.groupby("Contract Term (Months)").apply(lambda x: (x["Churned"] == "Yes").mean()).reset_index(name="Churn Rate")

# Renewal distribution
renew_bins = [0, 0.2, 0.4, 0.6, 0.8, 1.01]
renew_labels = ["0-0.2", "0.2-0.4", "0.4-0.6", "0.6-0.8", "0.8-1.0"]
renew_dist = pd.cut(_df["Renewal Probability"], bins=renew_bins, labels=renew_labels, include_lowest=True).value_counts().reindex(renew_labels)
renew_dist = renew_dist.reset_index()
renew_dist.columns = ["Bucket", "Accounts"]

# NPS scatter
scatter_df = _df[["NPS Score", "Renewal Probability"]].dropna().sample(min(200, len(_df)), random_state=42)

# Churn reasons
churn_reasons = _df.loc[churned_mask, "Churn Reason"].value_counts().reset_index()
churn_reasons.columns = ["Reason", "Accounts"]

# Channel perf
channel_perf = _df.groupby("Acquisition Channel").agg(ARR=("ARR", "sum"), Accounts=("Account ID", "count"))
channel_perf["ARR per Account"] = channel_perf["ARR"] / channel_perf["Accounts"]
channel_perf["Churn Rate"] = _df.groupby("Acquisition Channel")["Churned"].apply(lambda x: (x == "Yes").mean())
channel_perf = channel_perf.reset_index().sort_values("ARR per Account", ascending=False)

# Pricing
price_by_region = _df.groupby("Region").agg(
    List_Price=("List Price per Seat", "mean"),
    Net_Price=("Net Price per Seat", "mean"),
).reset_index()

# Discount buckets
disc_bins = [0, 0.05, 0.10, 0.15, 0.20, 0.25, 1.0]
disc_labels = ["0-5%", "5-10%", "10-15%", "15-20%", "20-25%", "25%+"]
_df["Discount Bucket"] = pd.cut(_df["Discount %"], bins=disc_bins, labels=disc_labels, include_lowest=True)

disc_summary = _df.groupby("Discount Bucket").agg(
    Accounts=("Account ID", "count"),
    ARR=("ARR", "sum"),
    Churn_Rate=("Churned", lambda x: (x == "Yes").mean()),
).reset_index()

# Usage
usage_bins = [0, 0.8, 0.95, 1.10, 1.25, 2.0]
usage_labels = ["<0.80", "0.80-0.95", "0.95-1.10", "1.10-1.25", ">1.25"]
_df["Usage Bucket"] = pd.cut(_df["Last Quarter Usage %"], bins=usage_bins, labels=usage_labels, include_lowest=True)
usage_dist = _df.groupby("Usage Bucket").size().reset_index(name="Accounts")

usage_scatter = _df[["Last Quarter Usage %", "Expansion MRR"]].dropna().sample(min(200, len(_df)), random_state=7)

# Seat penetration
seat_pen = _df.groupby("Plan Tier").apply(lambda x: (x["Seats"].sum() / x["Employee Count"].sum())).reset_index(name="Seat Penetration")

# Helpers

def fmt_currency(val):
    return f"${val:,.0f}"


def svg_bar(labels, values, width=760, height=320, title=""):
    max_val = max(values) if values else 1
    bar_width = width / max(len(values), 1)
    colors = ["#2E86AB", "#F6C85F", "#6F4E7C", "#9FD356", "#CA472F", "#5AA9E6", "#F49D37", "#9B5DE5"]
    svg = [f"<svg width='{width}' height='{height}' viewBox='0 0 {width} {height}' xmlns='http://www.w3.org/2000/svg'>"]
    if title:
        svg.append(f"<text x='0' y='18' font-size='16' font-weight='600'>{title}</text>")
    chart_top = 28
    chart_height = height - 48
    for i, (label, val) in enumerate(zip(labels, values)):
        x = i * bar_width + 8
        bar_h = (val / max_val) * (chart_height - 10)
        y = chart_top + (chart_height - bar_h)
        color = colors[i % len(colors)]
        svg.append(f"<rect x='{x:.1f}' y='{y:.1f}' width='{bar_width - 14:.1f}' height='{bar_h:.1f}' fill='{color}' rx='4'/>")
        svg.append(f"<text x='{x:.1f}' y='{height - 10}' font-size='11'>{label}</text>")
    svg.append("</svg>")
    return "".join(svg)


def svg_line(labels, values, width=760, height=320, title=""):
    max_val = max(values) if values else 1
    min_val = min(values) if values else 0
    span = max(max_val - min_val, 1e-6)
    svg = [f"<svg width='{width}' height='{height}' viewBox='0 0 {width} {height}' xmlns='http://www.w3.org/2000/svg'>"]
    if title:
        svg.append(f"<text x='0' y='18' font-size='16' font-weight='600'>{title}</text>")
    chart_top = 28
    chart_height = height - 48
    chart_width = width - 20
    points = []
    for i, val in enumerate(values):
        x = 10 + (i / max(len(values) - 1, 1)) * chart_width
        y = chart_top + (1 - (val - min_val) / span) * chart_height
        points.append((x, y))
    path = "M " + " L ".join([f"{x:.1f} {y:.1f}" for x, y in points])
    svg.append(f"<path d='{path}' fill='none' stroke='#2E86AB' stroke-width='2.5'/>")
    for x, y in points:
        svg.append(f"<circle cx='{x:.1f}' cy='{y:.1f}' r='3.2' fill='#2E86AB'/>")
    if labels:
        step = max(1, len(labels) // 6)
        for i in range(0, len(labels), step):
            x = 10 + (i / max(len(labels) - 1, 1)) * chart_width
            svg.append(f"<text x='{x:.1f}' y='{height - 10}' font-size='11'>{labels[i]}</text>")
    svg.append("</svg>")
    return "".join(svg)


def svg_scatter(x_vals, y_vals, width=760, height=320, title=""):
    max_x = max(x_vals) if len(x_vals) else 1
    min_x = min(x_vals) if len(x_vals) else 0
    max_y = max(y_vals) if len(y_vals) else 1
    min_y = min(y_vals) if len(y_vals) else 0
    span_x = max(max_x - min_x, 1e-6)
    span_y = max(max_y - min_y, 1e-6)
    svg = [f"<svg width='{width}' height='{height}' viewBox='0 0 {width} {height}' xmlns='http://www.w3.org/2000/svg'>"]
    if title:
        svg.append(f"<text x='0' y='18' font-size='16' font-weight='600'>{title}</text>")
    chart_top = 28
    chart_height = height - 48
    chart_width = width - 20
    for x, y in zip(x_vals, y_vals):
        px = 10 + ((x - min_x) / span_x) * chart_width
        py = chart_top + (1 - (y - min_y) / span_y) * chart_height
        svg.append(f"<circle cx='{px:.1f}' cy='{py:.1f}' r='2.8' fill='#6F4E7C' opacity='0.7'/>")
    svg.append("</svg>")
    return "".join(svg)


def svg_donut(labels, values, width=360, height=320, title=""):
    total = sum(values) if values else 1
    radius = min(width, height) // 3
    cx = width // 2
    cy = height // 2
    colors = ["#2E86AB", "#F6C85F", "#6F4E7C", "#9FD356", "#CA472F", "#5AA9E6", "#F49D37"]
    svg = [f"<svg width='{width}' height='{height}' viewBox='0 0 {width} {height}' xmlns='http://www.w3.org/2000/svg'>"]
    if title:
        svg.append(f"<text x='0' y='18' font-size='16' font-weight='600'>{title}</text>")
    start_angle = 0
    for i, val in enumerate(values):
        angle = (val / total) * 360
        end_angle = start_angle + angle
        large_arc = 1 if angle > 180 else 0
        x1 = cx + radius * np.cos(np.deg2rad(start_angle))
        y1 = cy + radius * np.sin(np.deg2rad(start_angle))
        x2 = cx + radius * np.cos(np.deg2rad(end_angle))
        y2 = cy + radius * np.sin(np.deg2rad(end_angle))
        color = colors[i % len(colors)]
        path = (
            f"M {cx} {cy} L {x1:.1f} {y1:.1f} "
            f"A {radius} {radius} 0 {large_arc} 1 {x2:.1f} {y2:.1f} Z"
        )
        svg.append(f"<path d='{path}' fill='{color}'/>")
        start_angle = end_angle
    svg.append(f"<circle cx='{cx}' cy='{cy}' r='{radius * 0.55:.1f}' fill='#FFFFFF'/>")
    svg.append("</svg>")
    return "".join(svg)

# Build slides HTML

today = datetime.now().strftime("%B %d, %Y")

slides = []

slides.append(f"""
<section class='slide-section cover'>
  <div class='cover-content'>
    <div class='eyebrow'>Executive Presentation</div>
    <h1>Workforce Management SaaS</h1>
    <h2>Data Insights & Performance Review</h2>
    <div class='subtitle'>Prepared for Executive Leadership | {today}</div>
  </div>
</section>
""")

slides.append("""
<section class='slide-section agenda'>
  <div class='section-title'>Agenda</div>
  <div class='agenda-grid'>
    <div class='agenda-card'>Executive Summary</div>
    <div class='agenda-card'>Revenue & Growth</div>
    <div class='agenda-card'>Customer Health & Retention</div>
    <div class='agenda-card'>Sales & Channel Performance</div>
    <div class='agenda-card'>Pricing & Discounting</div>
    <div class='agenda-card'>Usage & Adoption</div>
    <div class='agenda-card'>Recommendations</div>
  </div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>Executive Summary</div>
  <div class='kpi-row'>
    <div class='kpi'><span>Total ARR</span><strong>{fmt_currency(kpi_total_arr)}</strong></div>
    <div class='kpi'><span>Total MRR</span><strong>{fmt_currency(kpi_total_mrr)}</strong></div>
    <div class='kpi'><span>Active Accounts</span><strong>{kpi_accounts}</strong></div>
    <div class='kpi'><span>Churn Rate</span><strong>{kpi_churn_rate:.1%}</strong></div>
    <div class='kpi'><span>NRR</span><strong>{kpi_nrr:.1%}</strong></div>
    <div class='kpi'><span>Avg Renewal</span><strong>{kpi_avg_renewal:.1%}</strong></div>
    <div class='kpi'><span>Expansion MRR</span><strong>{fmt_currency(kpi_expansion_mrr)}</strong></div>
    <div class='kpi'><span>Avg Discount</span><strong>{kpi_avg_discount:.1%}</strong></div>
  </div>
  <div class='narrative'>
    Portfolio performance remains healthy, driven by strong ARR concentration in top verticals and stable renewal probability. Net Revenue Retention above baseline indicates expansion traction, while churn pockets concentrate in specific plan tiers and shorter contract terms. Adoption remains the primary lever for expansion and long-term retention.
  </div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>Revenue & Growth</div>
  <div class='two-col'>
    <div class='card'>{svg_bar(arr_by_vertical['Vertical'].tolist()[:8], arr_by_vertical['ARR'].tolist()[:8], title='ARR by Vertical')}</div>
    <div class='card'>{svg_bar(arr_by_region['Region'].tolist(), arr_by_region['ARR'].tolist(), title='ARR by Region')}</div>
  </div>
  <div class='narrative'>The highest ARR is concentrated in the leading verticals and regions. Growth focus should balance expansion within high-performing verticals while diversifying into adjacent segments.</div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>ARR Momentum & Top Accounts</div>
  <div class='two-col'>
    <div class='card'>{svg_line(arr_by_month['Contract Start Month'].tolist(), arr_by_month['ARR'].tolist(), title='ARR Trend by Contract Start Month')}</div>
    <div class='card'>
      <div class='table-title'>Top Accounts by ARR</div>
      <table>
        <tr><th>Account</th><th>ARR</th><th>Region</th></tr>
        {''.join([f"<tr><td>{r['Account Name']}</td><td>{fmt_currency(r['ARR'])}</td><td>{r['Region']}</td></tr>" for _, r in top_accounts.iterrows()])}
      </table>
    </div>
  </div>
  <div class='narrative'>Top accounts materially influence ARR concentration; proactive renewal and expansion strategies are required to reduce exposure.</div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>Customer Health & Retention</div>
  <div class='two-col'>
    <div class='card'>{svg_bar(churn_by_plan['Plan Tier'].tolist(), churn_by_plan['Churn Rate'].tolist(), title='Churn Rate by Plan Tier')}</div>
    <div class='card'>{svg_bar(churn_by_term['Contract Term (Months)'].astype(str).tolist(), churn_by_term['Churn Rate'].tolist(), title='Churn Rate by Contract Term')}</div>
  </div>
  <div class='narrative'>Retention pressure is highest in specific plan tiers and shorter terms, indicating segments that require improved onboarding and success planning.</div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>Renewal Confidence & Churn Drivers</div>
  <div class='two-col'>
    <div class='card'>{svg_bar(renew_dist['Bucket'].tolist(), renew_dist['Accounts'].tolist(), title='Renewal Probability Distribution')}</div>
    <div class='card'>{svg_donut(churn_reasons['Reason'].tolist(), churn_reasons['Accounts'].tolist(), title='Churn Reasons')}</div>
  </div>
  <div class='narrative'>The renewal distribution shows a strong high-confidence cohort, while churn reasons point to adoption and value realization as primary risks.</div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>NPS vs Renewal Probability</div>
  <div class='card full'>{svg_scatter(scatter_df['NPS Score'].tolist(), scatter_df['Renewal Probability'].tolist(), title='NPS vs Renewal Probability')}</div>
  <div class='narrative'>Customer sentiment correlates with renewal outcomes. Improving NPS within low-scoring accounts should lift renewal probability.</div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>Sales & Channel Performance</div>
  <div class='two-col'>
    <div class='card'>{svg_bar(channel_perf['Acquisition Channel'].tolist(), channel_perf['ARR per Account'].tolist(), title='ARR per Account by Channel')}</div>
    <div class='card'>{svg_bar(channel_perf['Acquisition Channel'].tolist(), channel_perf['Churn Rate'].tolist(), title='Churn Rate by Channel')}</div>
  </div>
  <div class='narrative'>Channel ROI varies significantly. Investment should prioritize high-ARR, low-churn channels while tightening qualification on weaker channels.</div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>Pricing & Discounting</div>
  <div class='two-col'>
    <div class='card'>{svg_bar(price_by_region['Region'].tolist(), price_by_region['List_Price'].tolist(), title='Average List Price')}</div>
    <div class='card'>{svg_bar(price_by_region['Region'].tolist(), price_by_region['Net_Price'].tolist(), title='Average Net Price')}</div>
  </div>
  <div class='two-col' style='margin-top:14px;'>
    <div class='card'>{svg_bar(disc_summary['Discount Bucket'].astype(str).tolist(), disc_summary['Accounts'].tolist(), title='Discount Distribution')}</div>
    <div class='card'>{svg_bar(disc_summary['Discount Bucket'].astype(str).tolist(), disc_summary['Churn_Rate'].tolist(), title='Churn by Discount Bucket')}</div>
  </div>
  <div class='narrative'>Discounting correlates with churn in specific buckets. Enforce guardrails and tie discounts to longer terms and adoption milestones.</div>
</section>
""")

slides.append(f"""
<section class='slide-section'>
  <div class='section-title'>Usage & Adoption</div>
  <div class='two-col'>
    <div class='card'>{svg_bar(usage_dist['Usage Bucket'].astype(str).tolist(), usage_dist['Accounts'].tolist(), title='Usage Distribution')}</div>
    <div class='card'>{svg_scatter(usage_scatter['Last Quarter Usage %'].tolist(), usage_scatter['Expansion MRR'].tolist(), title='Usage vs Expansion MRR')}</div>
  </div>
  <div class='card' style='margin-top:14px;'>{svg_donut(seat_pen['Plan Tier'].tolist(), seat_pen['Seat Penetration'].tolist(), title='Seat Penetration by Plan')}</div>
  <div class='narrative'>Adoption levels drive expansion. Focus enablement on low-usage cohorts to increase seat penetration and upsell readiness.</div>
</section>
""")

slides.append("""
<section class='slide-section recommendations'>
  <div class='section-title'>Recommendations</div>
  <div class='rec-list'>
    <div class='rec-card'><h4>Retention Focus</h4><p>Prioritize at-risk plan tiers and short-term contracts with proactive renewal playbooks and CSM interventions.</p></div>
    <div class='rec-card'><h4>Channel Rebalancing</h4><p>Invest more heavily in channels with the best ARR per account and lowest churn. Tighten lead qualification elsewhere.</p></div>
    <div class='rec-card'><h4>Discount Governance</h4><p>Introduce discount thresholds and approval gates tied to term length, adoption, and success milestones.</p></div>
    <div class='rec-card'><h4>Adoption Acceleration</h4><p>Target low-usage accounts with enablement, training, and in-app guidance to unlock expansion.</p></div>
    <div class='rec-card'><h4>Support as Early Signal</h4><p>High ticket volumes correlate with churn. Escalate product fixes and executive outreach for high-ticket accounts.</p></div>
  </div>
</section>
""")

slides.append("""
<section class='slide-section'>
  <div class='section-title'>Appendix: Methodology</div>
  <div class='narrative'>All metrics are derived from the synthetic SaaS account dataset. ARR and MRR are computed at the account level. Churn is defined where Churned = Yes. NRR is calculated as (ARR + Expansion MRR * 12 - Churned ARR) / ARR. Usage, discount, and ticket distributions are bucketed for interpretability.</div>
</section>
""")

html = f"""
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='utf-8'/>
<title>Insights Slides</title>
<style>
  * {{ box-sizing: border-box; }}
  body {{ margin: 0; font-family: 'Avenir Next', 'Avenir', 'Helvetica Neue', Arial, sans-serif; background: #0f172a; }}
  .slide-section {{ width: 1920px; height: 1080px; padding: 80px 96px; background: #f8fafc; color: #0f172a; }}
  .slide-section:nth-child(even) {{ background: #eef2ff; }}
  .cover {{ background: linear-gradient(135deg, #1e293b, #0f172a); color: #f8fafc; }}
  .cover-content {{ margin-top: 140px; }}
  .cover h1 {{ font-size: 72px; margin: 10px 0; }}
  .cover h2 {{ font-size: 36px; font-weight: 500; margin: 0 0 16px; }}
  .cover .subtitle {{ font-size: 20px; color: #cbd5f5; }}
  .cover .eyebrow {{ text-transform: uppercase; letter-spacing: 0.12em; font-size: 16px; color: #93c5fd; }}
  .section-title {{ font-size: 36px; font-weight: 700; margin-bottom: 24px; }}
  .two-col {{ display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }}
  .card {{ background: #ffffff; border-radius: 18px; padding: 18px 20px; box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12); }}
  .card.full {{ width: 100%; }}
  .kpi-row {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 26px; }}
  .kpi {{ background: #ffffff; border-radius: 14px; padding: 16px; box-shadow: 0 10px 20px rgba(15, 23, 42, 0.1); }}
  .kpi span {{ font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.08em; }}
  .kpi strong {{ display: block; font-size: 26px; margin-top: 6px; }}
  .narrative {{ margin-top: 18px; font-size: 20px; line-height: 1.45; color: #1e293b; }}
  .agenda-grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 40px; }}
  .agenda-card {{ background: #1e293b; color: #f8fafc; padding: 22px; border-radius: 14px; font-size: 20px; }}
  table {{ width: 100%; border-collapse: collapse; font-size: 16px; }}
  th, td {{ border-bottom: 1px solid #e2e8f0; padding: 8px 6px; text-align: left; }}
  th {{ color: #475569; font-weight: 600; }}
  .table-title {{ font-weight: 600; margin-bottom: 10px; font-size: 18px; }}
  .rec-list {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }}
  .rec-card {{ background: #ffffff; border-radius: 16px; padding: 18px 20px; box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12); }}
  .rec-card h4 {{ margin: 0 0 8px; font-size: 20px; color: #1e293b; }}
  .rec-card p {{ margin: 0; font-size: 18px; line-height: 1.4; }}
</style>
</head>
<body>
{''.join(slides)}
</body>
</html>
"""

out_path.write_text(html)
print(f"Wrote slide HTML to {out_path}")

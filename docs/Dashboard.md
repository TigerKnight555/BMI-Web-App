# Dashboard

## Purpose

The Dashboard is the app entry view. It provides an overview and acts as the central navigation point.

## What This View Provides

- Page title area: `Dashboard`
- Embedded Bar Chart iframe (`../barchart/barchart.html`)
- Embedded Line Chart iframe (`../line_chart/line_chart.html`)
- Embedded Tables iframe (`../tables/tables.html`)
- Sidebar navigation (`Dashboard`, `Forms`, `Tables`)

## User Flow

1. Open the app and load Dashboard
2. Review embedded chart and table sections
3. Use the sidebar to switch views (`#dashboard`, `#formular`, `#tables`)

## Technical Note

The route content is injected into `#view` by `src/dashboard/dashboard.js`.  
Routing is hash-based and currently mapped as:

- `#dashboard` -> `./dashboard/dashboard.html`
- `#formular` -> `./formular/formular.html`
- `#tables` -> `./tables/tables.html`

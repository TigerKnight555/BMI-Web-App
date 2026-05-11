# BMI-Web-App
Learning unit LF10

## Who Is This App For?

The BMI Web App is for users who want to calculate BMI values and review their entries in a simple browser-based interface.

## Quick Start

1. Start a local web server in the project root:

```bash
python3 -m http.server 8000
```

2. Open `http://localhost:8000` in your browser.
3. Use the menu to switch between `Dashboard`, `Forms`, and `Tables`.

Note: Do not open the app via `file://`, because some content is loaded with `fetch()`.

## What The App Provides

- BMI calculation with age, date, weight, and height inputs
- Automatic persistence of the latest values in `localStorage`
- Table view with filter and sort options for BMI entries
- Dashboard as a central entry point and overview

## Views Overview

- [Dashboard](./docs/Dashboard.md)
- [Formular](./docs/Formular.md)
- [Tables](./docs/Tables.md)
- [Barchart](./docs/Barchart.md)
- [Linechart](./docs/Linechart.md)
- [Settings](./docs/Settings.md)

## Common Issues

- **Blank page or loading errors:** start the app through an HTTP server (see Quick Start).
- **Outdated data:** clear browser `localStorage` or reset data inside the app.
- **Layout issues:** refresh the page and use an up-to-date browser version.

## Developer Documentation

Development standards, testing, and quality guidance:

- [Contributing Guide](./CONTRIBUTING.md)
- [Documentation Index](./docs/README.md)
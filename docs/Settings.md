# Settings

## Purpose

The Settings view stores basic user preferences in browser `localStorage`.

## What This View Provides

- A dialog that can be opened and closed
- A gender selector with values `none`, `male`, and `female`
- Persistent settings storage under `userSettings`
- A separate graph type toggle feature stored under `graphType` (`bar` or `line`)

## Data Model

### `userSettings`

```json
{
  "gender": "none"
}
```

### `graphType`

Saved by the graph type toggle feature:

- `bar`
- `line`

## User Flow

1. Click **Einstellungen** to open the dialog
2. Choose a gender value
3. Close the dialog
4. Re-open the app and confirm the setting is still selected

Graph type flow (separate view):

1. Open `settings/graphType/graphTypeBtn.html`
2. Click the button to toggle between bar and line
3. Re-open and verify persisted button state

## Technical Note

Settings are loaded on `DOMContentLoaded` and updated when the selected value changes.  
Both settings and graph type use inline `onclick` handlers in the current HTML.
# Linechart

## Purpose

The Linechart view shows BMI values as a trend line over time.

## What This View Provides

- BMI data visualization as a line chart
- Rendering on a `canvas` element
- Trend-based view instead of single-value focus

## Current Data State

- `plotChart("bmi-chart")` is executed on load
- The implementation reads `localStorage['bmiData']` into `rawPlotData`
- Current chart configuration references `plotData`, which is not defined in the file

## Integration Notes

- Chart logic expects a `canvas` element
- Default canvas id in this view: `bmi-chart`
- Without a defined `plotData` source, the current implementation may fail at runtime

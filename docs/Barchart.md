# Barchart

## Purpose

The Barchart view visualizes BMI history as a bar chart.

## What This View Provides

- Visualization of BMI values over time
- Color-coded bars by BMI range
- Persistence of chart history in browser `localStorage`

## Data Source

- Uses local `bmiHistory` data from `localStorage`
- Height is currently a fixed value in the code
- Chart label/value source:
  - `labels`: `entry.date`
  - `data`: `entry.bmi`

## User Flow

1. Open the view
2. Existing `bmiHistory` data is rendered as bars
3. Reload the page and confirm the chart still renders persisted history

## Technical Note

`addBMI()` exists in `src/barchart/script.js`, but `src/barchart/barchart.html` currently has no input field or button that calls it.  
In the current UI, this view is effectively read-only unless `addBMI()` is triggered externally.
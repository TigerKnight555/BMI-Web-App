# Tables

## Purpose

The Tables view displays BMI measurements in a structured format and supports fast filtering and sorting.

## What This View Provides

- Table columns:
  - Date
  - Weight
  - Height
  - Calculated BMI
  - BMI rating
- Filters:
  - All entries
  - Last week
  - Last month
- Sorting:
  - Date ascending/descending
  - BMI ascending/descending
- Delete action per row

## Data Basis

- Data is loaded from `localStorage['bmiData']`
- `bmiData` is expected to be an array of entries (written by Formular)
- BMI is recalculated per row from weight and height during rendering
- Deleting a row updates both the table and `localStorage`

## User Flow

1. Open the table view
2. Optionally apply filters and sorting
3. Compare or delete entries

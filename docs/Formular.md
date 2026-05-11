# Formular

## Purpose

This view collects user data and calculates BMI with a category result.

## What This View Provides

- Input fields for:
  - Age (1-120)
  - Date
  - Weight in kg (1-500)
  - Height in cm (50-250)
- **BMI berechnen** button
- Button **Clear/Reset**
- Result area with BMI value and category
- Error area for invalid inputs

## Logic and Behavior

- Inputs are validated before calculation
- BMI formula: `weight / (height in m)^2`
- Category mapping: Underweight, Normal weight, Overweight, Obesity
- Each calculation is appended to `localStorage['bmiData']` as a history entry
- On load, the last history entry is restored into the form

## User Flow

1. Open `formular.html` in browser
2. Fill all 4 input fields
3. Click "BMI berechnen"
4. Result is displayed and saved
5. On reload: Data is still there
6. "Clear/Reset" deletes all data

## Local Storage

**Key:** `localStorage['bmiData']`

Data is saved as a JSON array after each calculation:

```json
[
  {
    "age": "25",
    "date": "2025-02-23",
    "weight": "75",
    "height": "180",
    "bmi": 23.1,
    "category": "Normalgewicht",
    "timestamp": "2025-02-23T14:30:45.123Z"
  }
]
```

### Read Data
```javascript
// Read full history
const history = JSON.parse(localStorage.getItem("bmiData") || "[]");
console.log(history.length);

// Read last entry
if (history.length > 0) {
  const latest = history[history.length - 1];
  console.log(latest.bmi, latest.category);
}
```

### Delete Data
```javascript
localStorage.removeItem("bmiData");
```
const { test, expect } = require("@playwright/test");

const views = [
  {
    name: "Dashboard View",
    hash: "#dashboard",
    activeLink: "Dashboard",
    expectedText: "Dashboard",
  },
  {
    name: "Forms View",
    hash: "#formular",
    activeLink: "Forms",
    expectedText: /BMI Formular/,
  },
  {
    name: "Tables View",
    hash: "#tables",
    activeLink: "Tables",
    expectedText: /BMI|Messungen|Datum/,
  },
];

for (const view of views) {
  test(`${view.name} rendert korrekt`, async ({ page }) => {
    await page.goto(`/src/index.html${view.hash}`);

    await expect(page.locator("#sidebarNav a.active")).toHaveText(view.activeLink);
    await expect(page.locator("#view")).toContainText(view.expectedText);
  });
}

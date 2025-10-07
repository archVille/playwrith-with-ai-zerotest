import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test('has title', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
await ai('go to playwright.dev', { page , test});

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  await ai('expect the page title to contain Playwright', { page , test});
});

test('get started link', async ({ page }) => {
  await ai('go to playwright.dev', { page , test});
  // await page.goto('https://playwright.dev/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();
  await ai('click the get started link', { page , test});

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await ai('expect page to have a heading with the name of Installation', { page , test});
});

test("navigating all top bar links", async ({ page }) => {
  await ai("go to playwright.dev", { page, test });
  // await page.goto('https://playwright.dev/');

  await ai('click on the "Docs" in the top of the bar', { page, test });

  await ai("expect the page to have a heading with the name of Installation", {
    page,
    test,
  });

  await ai("click the Playwright link", { page, test });

  await ai('click on the "API" in the top of the bar', { page, test });

  await ai(
    "expect the page to have a heading with the name of Playwright Library",
    { page, test }
  );

  await ai("click the Playwright link", { page, test });

  await ai('click on the "Community" in the top of the bar', { page, test });

  await ai("expect the page to have a heading with the name of Welcome", { page, test  });
});

# Playwright with AI Zerostep

This project demonstrates how to use [Playwright](https://playwright.dev/) for browser automation and testing, enhanced with [Zerostep AI](https://www.npmjs.com/package/@zerostep/playwright) for natural language test steps.

## Features

- Write Playwright tests using natural language commands via Zerostep AI.
- Supports Chromium browser out of the box.
- Generates HTML test reports.
- Example tests for navigation and UI validation.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```sh
npm install
```

### Configuration

Add your Zerostep AI token to `zerostep.config.json`:

```json
{
  "TOKEN": "YOUR_ZEROSTEP_TOKEN"
}
```

### Running Tests

```sh
npx playwright test
```

Test results and reports will be available in the `test-results/` and `playwright-report/` directories.

## Example Test

See [`tests/example.spec.ts`](tests/example.spec.ts):

```ts
import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test('has title', async ({ page }) => {
  await ai('go to playwright.dev', { page , test});
  await ai('expect the page title to contain Playwright', { page , test});
});
```

## Project Structure

```
.
├── tests/                 # Test files
├── playwright.config.ts   # Playwright configuration
├── zerostep.config.json   # Zerostep AI token config
├── playwright-report/     # HTML test reports
├── test-results/          # Test result data
├── package.json           # Project metadata and dependencies
└── .gitignore             # Git ignore rules
```

## License

ISC

---

For more information, see [Playwright documentation](https://playwright.dev/docs/intro) and [Zerostep AI](https://www.npmjs.com/package/@zerostep/playwright).
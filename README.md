# Amazon Automation Framework

## What is Automated
- **Guest product search**: Automated using Playwright. The test searches for a product and verifies that results appear.

## What is Not Automated (and Why)
- **Cart and checkout flows**: Not automated due to Amazon's advanced anti-bot protections, which block automation tools from adding products to the cart or proceeding to checkout, even for guest users.
- **Login/account flows**: Not automated for the same reason.

## How Cart/Checkout is Handled
- Example tests for cart and checkout are included, but are skipped with clear comments. This demonstrates test structure and awareness of real-world limitations.

## How to Run
- Install dependencies: `npm install`
- Run tests: `npx playwright test`

## Notes
- This framework is designed for demonstration and interview purposes. For real E2E automation, use a less-protected demo site or a test environment without anti-bot measures.
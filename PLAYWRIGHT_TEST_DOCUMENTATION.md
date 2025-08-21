# Playwright Test Project Documentation

## Project Overview

This project contains comprehensive end-to-end tests for an e-commerce website (automationteststore.com) using Playwright with TypeScript. The tests cover various shopping scenarios including user authentication, product browsing, cart management, and different product categories.

## Project Structure

```
test/
├── features/                    # Gherkin feature files
├── pages/                      # Page Object Model classes
├── tests/                      # Test specification files
├── playwright.config.ts        # Playwright configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── run-tests.sh               # Test execution script
```

## Technology Stack

- **Playwright**: End-to-end testing framework
- **TypeScript**: Programming language
- **Page Object Model**: Design pattern for test automation
- **Gherkin**: Behavior-driven development syntax
- **dotenv**: Environment variable management

## Configuration

### Playwright Configuration (`playwright.config.ts`)

- **Base URL**: https://automationteststore.com/
- **Browser**: Chromium (Chrome-based)
- **Viewport**: 1280x720
- **Timeouts**: 
  - Action timeout: 15 seconds
  - Navigation timeout: 20 seconds
  - Global test timeout: 120 seconds
- **Reporting**: HTML, JSON, and JUnit reports
- **Screenshots/Videos**: Captured on test failures

### Environment Variables

- `BASE_URL`: Website base URL
- `USERNAME`: Login credentials
- `PASSWORD`: Login credentials

## Page Objects

### 1. LoginPage (`pages/LoginPage.ts`)

**Purpose**: Handles user authentication functionality

**Key Methods**:
- `navigateToLogin()`: Navigates to login page
- `login(username, password)`: Performs login with credentials

**Features**:
- Form validation
- Success/failure verification
- Redirect handling

### 2. HomePage (`pages/HomePage.ts`)

**Purpose**: Manages home page navigation and interactions

**Key Methods**:
- `clickHomeNav()`: Navigates to home page
- `clickDoveBrandFromCarousel()`: Selects Dove brand from carousel
- `navigateToApparelSection()`: Goes to apparel section
- `navigateToTshirtsSection()`: Navigates to T-shirts section
- `smoothScrollToElement()`: Smooth scrolling to specific elements
- `smoothScrollToTop()`: Scrolls to page top
- `smoothScrollToBottom()`: Scrolls to page bottom

**Features**:
- Smooth scrolling animations
- Navigation menu handling
- Brand carousel interaction

### 3. ProductPage (`pages/ProductPage.ts`)

**Purpose**: Handles product-related operations and cart management

**Key Methods**:
- `addNewestItemToCart()`: Adds newest product to cart
- `sortByLowToHigh()`: Sorts products by price (low to high)
- `sortByHighToLow()`: Sorts products by price (high to low)
- `selectLowestTshirt()`: Selects lowest-priced T-shirt
- `addHighestValueShoeToCart()`: Adds highest-priced shoe with quantity 2

**Private Methods**:
- `addTshirtToCart()`: Adds T-shirt to cart
- `addShoeToCart()`: Adds shoe to cart
- `setShoeQuantity()`: Sets shoe quantity

**Features**:
- Multiple selector fallback strategies
- Product sorting functionality
- Quantity management
- Robust error handling

### 4. CartPage (`pages/CartPage.ts`)

**Purpose**: Manages shopping cart operations and verification

**Key Methods**:
- `goToCart()`: Navigates to cart page
- `assertItemInCart()`: Verifies item presence and quantity
- `verifyTshirtsInCart()`: Verifies T-shirt items in cart

**Features**:
- Cart content validation
- Quantity verification
- Price/amount checking

## Test Scenarios

### Scenario 1: Complete E-commerce Flow
**File**: `tests/scenario1.spec.ts`
**Tags**: `@scenario1`, `@complete-flow`

**Test Flow**:
1. User login
2. Navigate to home page
3. Select Dove brand from carousel
4. Add newest item to cart
5. Verify cart contents

**Coverage**:
- User authentication
- Brand selection
- Product addition
- Cart verification

### Scenario 2: T-shirts and Shoes Shopping Flow
**File**: `tests/scenario2.spec.ts`
**Tags**: `@scenario2`, `@apparel-shopping`

**Test Flow**:
1. User login
2. Navigate to apparel section
3. Go to T-shirts section
4. Sort by low to high price
5. Select lowest value T-shirt
6. Return to apparel section
7. Add highest value shoe (quantity: 2)

**Coverage**:
- Category navigation
- Product sorting
- Price-based selection
- Quantity management
- Multiple product types

### Scenario 3: Skincare Section Testing
**File**: `tests/scenario3.spec.ts`
**Tags**: `@scenario3`, `@skincare-testing`

**Test Flow**:
1. User login
2. Navigate to skincare section
3. Count sale and out-of-stock items
4. Add available sale items to cart
5. Verify cart contents

**Coverage**:
- Product counting
- Sale item identification
- Stock status checking
- Bulk cart operations

### Scenario 4: Men Section Testing
**File**: `tests/scenario4.spec.ts`
**Tags**: `@scenario4`, `@men-section`

**Test Flow**:
1. User login
2. Navigate to men section
3. Find product ending with "M"
4. Add to cart if available
5. Verify cart or handle out-of-stock scenario

**Coverage**:
- Product name pattern matching
- Stock availability checking
- Conditional cart operations
- Edge case handling

## Feature File

**File**: `features/ecommerce-scenarios.feature`

Contains Gherkin scenarios that describe the test behavior in business-readable format:

- **Background**: Common setup steps (login, home page)
- **Scenario 1**: Complete e-commerce flow
- **Scenario 2**: Apparel shopping (T-shirts and shoes)
- **Scenario 3**: Skincare section testing
- **Scenario 4**: Men section testing

## Test Execution

### Running Tests

```bash
# Run all tests
npm test

# Run specific scenario
npx playwright test tests/scenario1.spec.ts

# Run with specific browser
npx playwright test --project=chromium

# Run in headed mode
npx playwright test --headed

# Run with debug
npx playwright test --debug
```

### Test Scripts

```bash
# Run tests with shell script
./run-tests.sh

# Install Playwright browsers
npx playwright install

# Show Playwright report
npx playwright show-report
```

## Key Features

### 1. Robust Selector Strategy
- Multiple fallback selectors for each element
- XPath and CSS selector combinations
- Dynamic element identification

### 2. Error Handling
- Comprehensive try-catch blocks
- Graceful degradation for missing elements
- Detailed logging for debugging

### 3. Wait Strategies
- Network idle waiting
- Element visibility verification
- Custom timeout configurations

### 4. Reporting
- HTML reports with screenshots
- JSON and JUnit output
- Video recording on failures
- Trace files for debugging

### 5. Cross-browser Support
- Chromium (primary)
- Firefox and WebKit (commented out)
- Responsive viewport handling

## Best Practices Implemented

1. **Page Object Model**: Separation of test logic and page interactions
2. **Reusable Methods**: Common functionality extracted into utility methods
3. **Environment Configuration**: Externalized configuration and credentials
4. **Comprehensive Logging**: Detailed console output for debugging
5. **Robust Waiting**: Multiple wait strategies for stability
6. **Error Recovery**: Fallback mechanisms for element interactions
7. **Clean Code**: Well-structured, readable test code

## Maintenance and Extensibility

### Adding New Tests
1. Create new test file in `tests/` directory
2. Extend existing page objects or create new ones
3. Add corresponding Gherkin scenario in feature file
4. Update documentation

### Modifying Selectors
1. Update selectors in page object files
2. Maintain fallback selector arrays
3. Test with different page states
4. Update XPath documentation if needed

### Environment Changes
1. Update `.env` file with new credentials
2. Modify `playwright.config.ts` for new URLs
3. Update timeout values if needed
4. Test configuration changes

## Troubleshooting

### Common Issues
1. **Element Not Found**: Check selector arrays and fallback strategies
2. **Timeout Errors**: Verify wait strategies and timeout values
3. **Login Failures**: Check environment variables and credentials
4. **Page Load Issues**: Verify network idle waiting and page state checks

### Debug Mode
```bash
npx playwright test --debug
```
- Opens Playwright Inspector
- Step-by-step execution
- Element highlighting
- Action replay

### Trace Files
- Generated on test failures
- View with: `npx playwright show-trace trace.zip`
- Shows detailed execution timeline
- Helps identify timing issues

## Performance Considerations

- **Parallel Execution**: Tests run in parallel by default
- **Worker Management**: Configurable worker processes
- **Resource Cleanup**: Automatic cleanup after tests
- **Timeout Management**: Configurable timeouts for different operations

## Security Features

- **Credential Management**: Environment variable usage
- **No Hardcoded Secrets**: All sensitive data externalized
- **Secure Headers**: Browser security settings maintained
- **Session Handling**: Proper login/logout management

This documentation provides a comprehensive overview of your Playwright test project, covering all aspects from setup to execution and maintenance.

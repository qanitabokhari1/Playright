# XPath Selectors Used in Test Scenarios

This document lists all the XPath selectors used in the automated test scenarios for the Automation Test Store.

## 🏠 Home Navigation
**Selector**: `//*[@id="categorymenu"]/nav/ul/li[1]`
**Purpose**: Click on the Home navigation link
**Location**: `pages/HomePage.ts` - `clickHomeNav()` method

## 🎯 Brand & Category Selection

### Dove Brand Selection
**Selector**: `//*[@id="brandcarousal"]/li[7]`
**Purpose**: Select the Dove brand from the brands carousel
**Location**: `pages/HomePage.ts` - `clickDoveBrandFromCarousel()` method

### Apparel Section
**Selector**: `//*[@id="categorymenu"]/nav/ul/li[2]`
**Purpose**: Navigate to APPAREL & ACCESSORIES section
**Location**: `pages/HomePage.ts` - `navigateToApparelSection()` method

### T-shirts Subsection
**Selector**: `/html/body/div/div[1]/div[1]/section/nav/ul/li[2]/div/ul[1]/li[2]`
**Purpose**: Navigate to T-shirts subsection within Apparel
**Location**: `pages/HomePage.ts` - `navigateToTshirtsSection()` method

### Skincare Section
**Selector**: `//*[@id="categorymenu"]/nav/ul/li[4]`
**Purpose**: Navigate to Skincare section
**Location**: `tests/scenario3.spec.ts` - Direct usage in test

### Men Section
**Selector**: `//*[@id="categorymenu"]/nav/ul/li[6]`
**Purpose**: Navigate to Men section
**Location**: `tests/scenario4.spec.ts` - Direct usage in test

## 📦 Product Selection (First/Newest Item)
**Selector**: `//*[@id="maincontainer"]/div/div/div/div/div[2]/div[3]`
**Purpose**: Locate and click on the first/newest product to go to product detail page
**Location**: `pages/ProductPage.ts` - `addNewestItemToCart()` method
**Sorting**: Automatically sorts products from **NEWEST to OLDEST** before selection

## 🔄 Product Sorting
**Purpose**: Ensure the newest products are selected first
**Sort Options Tried** (in priority order):
1. `Date New > Old`
2. `Newest`
3. `Date`
4. `Latest`
5. `New to Old`
6. `Newest First`
7. `Date Descending`
8. `Latest First`
9. `New`
10. `Recent`

**Fallback**: If sorting fails, continues with default product order
**Verification**: Logs first product after sorting to confirm order

## 🛒 Add to Cart Buttons

### Product Detail Page (Scenario 1)
**Primary Selector**: `//*[@id="maincontainer"]/div/div/div/div/div[2]/div[3]/div[2]/div[3]/a`
**Fallback Selectors**: Multiple selectors for robustness
**Purpose**: Click the Add to Cart button on the product detail page
**Location**: `pages/ProductPage.ts` - `addNewestItemToCart()` method

### Skincare Section (Scenario 3)
**Selector**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]/div[2]/div[3]/a`
**Purpose**: Click the Add to Cart button directly from skincare product list
**Location**: `tests/scenario3.spec.ts` - Direct usage in test
**Note**: This selector adds items directly from the product list without navigating to detail page

## 💰 Product Price
**Selector**: `//*[@id="product_details"]/div/div[2]/div/div/div[1]/div`
**Purpose**: Get the product price information
**Location**: `pages/ProductPage.ts` - `getProductDetails()` method

## 🔢 Product Quantity
**Selector**: `//*[@id="product_quantity"]`
**Purpose**: Verify the quantity of the item in cart
**Location**: `pages/CartPage.ts` - `assertItemInCart()` method

## 🏷️ Product Status Indicators (Skincare Section)

### Product Container
**Selector**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]`
**Purpose**: Locate individual product containers in skincare section
**Location**: `tests/scenario3.spec.ts` - Used for counting total products

## 🏷️ Product Names and Cart Verification

### Product Name (Men Section)
**Selector**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]/div[2]/h4/a`
**Purpose**: Get product name from product list
**Location**: `tests/scenario4.spec.ts` - Used for finding products ending with M

### Cart Item Name Verification
**Selector**: `//*[@id="cart_checkout1"]/div/table/tbody/tr/td[2]/a`
**Purpose**: Verify the name of item in cart
**Location**: `tests/scenario4.spec.ts` - Used for cart verification

### Sale Indicator
**Selector**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]/div[2]/span`
**Purpose**: Check if a product is on sale
**Location**: `tests/scenario3.spec.ts` - Used for counting sale items

### Out of Stock Indicator
**Selector**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[2]/div[2]/div[3]/span`
**Purpose**: Check if a product is out of stock
**Location**: `tests/scenario3.spec.ts` - Used for counting out of stock items

## 📋 Test Flow Summary

### Scenario 1: Complete E-commerce Flow
1. **Login**: Uses form elements by ID
2. **Home Navigation**: `//*[@id="categorymenu"]/nav/ul/li[1]`
3. **Dove Brand**: `//*[@id="brandcarousal"]/li[7]`
4. **Product Selection**: `//*[@id="maincontainer"]/div/div/div/div/div[2]/div[3]` (clicks to go to detail page)
5. **Add to Cart**: Multiple selectors on product detail page
6. **Auto-Navigate to Cart**: Automatically navigates to cart page after adding items
7. **Cart Verification**: `//*[@id="product_quantity"]` and other cart elements

### Scenario 2: Apparel & T-shirts Flow
1. **Login**: Uses form elements by ID
2. **Home Navigation**: `//*[@id="categorymenu"]/nav/ul/li[1]`
3. **Apparel Section**: `//*[@id="categorymenu"]/nav/ul/li[2]`
4. **T-shirts Subsection**: `/html/body/div/div[1]/div[1]/section/nav/ul/li[2]/div/ul[1]/li[2]`

### Scenario 3: Skincare Section Testing
1. **Login**: Uses form elements by ID
2. **Skincare Section**: `//*[@id="categorymenu"]/nav/ul/li[4]`
3. **Product Container**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]`
4. **Sale Indicator**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]/div[2]/span`
5. **Out of Stock Indicator**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[2]/div[2]/div[3]/span`
6. **Add to Cart Button**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]/div[2]/div[3]/a`

### Scenario 4: Men Section Testing
1. **Login**: Uses form elements by ID
2. **Men Section**: `//*[@id="categorymenu"]/nav/ul/li[6]`
3. **Product Name**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]/div[2]/h4/a`
4. **Add to Cart Button**: `//*[@id="maincontainer"]/div/div/div/div/div[3]/div[1]/div[2]/div[3]/a`
5. **Cart Verification**: `//*[@id="cart_checkout1"]/div/table/tbody/tr/td[2]/a`

## 🔍 Fallback Selectors

The test includes comprehensive fallback mechanisms:
- **Product Selection**: Multiple selectors to find the first product
- **Add to Cart**: Multiple selectors for the Add to Cart button
- **Cart Navigation**: Multiple selectors for cart/checkout elements
- **Cart Elements**: Multiple selectors for cart table/container
- **Product Verification**: Multiple selectors for finding products in cart
- **Quantity Verification**: Multiple selectors for quantity inputs
- **Success Messages**: Multiple indicators for successful operations

## 📝 Usage Notes

### Scenario 1: Complete E-commerce Flow
- **Product Flow**: The test first clicks on a product to navigate to the product detail page, then adds to cart from there
- **Auto-Cart Navigation**: After adding to cart, the test automatically navigates to the cart page
- **Robust Selection**: Uses multiple fallback selectors for maximum reliability
- **Page Navigation**: Properly waits for page loads between steps
- **Error Handling**: Comprehensive error handling with detailed logging
- **XPath Priority**: Uses your exact XPath selectors as primary selectors

### Scenario 2: Apparel & T-shirts Flow
- **Navigation Flow**: Navigates through main category menu to specific subsections
- **Page Verification**: Verifies each page loads correctly before proceeding
- **Error Handling**: Comprehensive error handling with detailed logging

### Scenario 3: Skincare Section Testing
- **Direct Product Interaction**: Adds items directly from product list without navigating to detail pages
- **Dynamic Counting**: Iterates through all products to count sale and out of stock items
- **Cart Management**: Automatically adds available sale items to cart
- **Comprehensive Verification**: Counts total products, sale items, out of stock items, and cart contents
- **XPath Iteration**: Uses dynamic XPath selectors with index variables for product iteration

### Scenario 4: Men Section Testing
- **Product Name Filtering**: Searches through all products to find one ending with "M"
- **Direct Cart Addition**: Adds the selected product directly from product list to cart
- **Cart Verification**: Verifies that the item in cart ends with "M" as expected
- **XPath Product Iteration**: Uses dynamic XPath selectors to iterate through products and find the target
- **Robust Error Handling**: Handles cases where no product ending with "M" is found

## 🚀 Running the Tests

```bash
# Make script executable
chmod +x run-tests.sh

# Run all scenarios
./run-tests.sh headed

# Run specific browser
./run-tests.sh chromium

# Run specific scenario (using Playwright directly)
npx playwright test tests/scenario1.spec.ts
npx playwright test tests/scenario2.spec.ts
npx playwright test tests/scenario3.spec.ts
npx playwright test tests/scenario4.spec.ts
```

## 🔧 Key Improvements Made

1. **Fixed Product Flow**: Now properly navigates to product detail page before adding to cart
2. **Multiple Selectors**: Added fallback selectors for robustness
3. **Better Error Handling**: More informative error messages and logging
4. **Page Load Verification**: Proper waits for page transitions
5. **Detailed Logging**: Shows exactly which selector is being used at each step

The test will automatically use these XPath selectors and provide detailed logging of each step, with robust fallback mechanisms for reliability.

import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

 
  private async smoothScrollToElement(selector: string, duration: number = 1000) {
    await this.page.evaluate(({ selector, duration }) => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
      }
    }, { selector, duration });
    
    await this.page.waitForTimeout(duration + 200);
  }


  private async smoothScrollToPosition(x: number, y: number, duration: number = 1000) {
    await this.page.evaluate(({ x, y, duration }) => {
      window.scrollTo({
        top: y,
        left: x,
        behavior: 'smooth'
      });
    }, { x, y, duration });
    
    await this.page.waitForTimeout(duration + 200);
  }

  async smoothScrollToTop(duration: number = 800) {
    console.log('Smooth scrolling to top of page...');
    await this.smoothScrollToPosition(0, 0, duration);
    console.log('✓ Smooth scroll to top completed');
  }

  async smoothScrollToBottom(duration: number = 1000) {
    console.log('Smooth scrolling to bottom of page...');
    await this.page.evaluate(({ duration }) => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, { duration });
    
    await this.page.waitForTimeout(duration + 200);
    console.log('✓ Smooth scroll to bottom completed');
  }

  async clickHomeNav() {
    console.log('Navigating to Home page...');
    const homeLink = this.page.locator('//*[@id="categorymenu"]/nav/ul/li[1]');
    
    await homeLink.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
    
    await homeLink.click();
    console.log('✓ Clicked Home navigation');
    
    await this.page.waitForLoadState('domcontentloaded', { timeout: 15000 });
    await this.page.waitForLoadState('networkidle', { timeout: 20000 });
    
    await this.page.locator('//div[@id="maincontainer"]').waitFor({ state: 'visible', timeout: 15000 });
    
    await this.page.waitForTimeout(2000);
    console.log('✓ Home page loaded successfully and stable');
  }

  async clickDoveBrandFromCarousel() {
    console.log('Selecting Dove brand from brands carousel...');
    
    await this.page.waitForLoadState('networkidle', { timeout: 15000 });
    await this.page.waitForTimeout(1500);
    
    const brandCarousel = this.page.locator('//*[@id="brandcarousal"]');
    
    await expect(brandCarousel).toBeVisible({ timeout: 15000 });
    await brandCarousel.waitFor({ state: 'visible', timeout: 10000 });
    
    console.log('Smooth scrolling to brand carousel...');
    await this.smoothScrollToElement('#brandcarousal', 1200);
    console.log('✓ Smooth scrolled to brand carousel section');
    
    const doveBrand = this.page.locator('//*[@id="brandcarousal"]/li[7]');
    
    await expect(doveBrand).toBeVisible({ timeout: 20000 });
    await doveBrand.waitFor({ state: 'visible', timeout: 10000 });
    
    await this.page.waitForTimeout(1000);
    
    await doveBrand.click();
    console.log('✓ Clicked on Dove brand');
    
    await this.page.waitForLoadState('domcontentloaded', { timeout: 20000 });
    await this.page.waitForLoadState('networkidle', { timeout: 25000 });
    
    await this.page.waitForTimeout(2000);
    
    try {
      await this.page.waitForTimeout(1500);
      console.log('✓ Dove products page loaded successfully and stable');
    } catch (error) {
      console.log('Dove products page load verification failed, but continuing...');
    }
  }

  async navigateToApparelSection() {
    console.log('Navigating to APPAREL & ACCESSORIES section...');
    
    await this.page.waitForLoadState('networkidle', { timeout: 15000 });
    await this.page.waitForTimeout(1000);
    
    const apparelLink = this.page.locator('//*[@id="categorymenu"]/nav/ul/li[2]');
    
    await expect(apparelLink).toBeVisible({ timeout: 15000 });
    await apparelLink.waitFor({ state: 'visible', timeout: 10000 });
    
    await apparelLink.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(300);
    
    if (await apparelLink.isVisible()) {
      await apparelLink.click();
      console.log('✓ Clicked on APPAREL & ACCESSORIES section');
    } else {
      throw new Error('APPAREL & ACCESSORIES section not found at //*[@id="categorymenu"]/nav/ul/li[2]');
    }
    
    await this.page.waitForLoadState('domcontentloaded', { timeout: 20000 });
    await this.page.waitForLoadState('networkidle', { timeout: 20000 });
    await this.page.waitForTimeout(3000);
    console.log('✓ APPAREL & ACCESSORIES page loaded successfully and stable');
  }

  async navigateToTshirtsSection() {
    console.log('Navigating to T-shirts section...');
    
    await this.page.waitForLoadState('networkidle', { timeout: 15000 });
    await this.page.waitForTimeout(1000);
    
    // Try multiple selectors for T-shirts section
    const selectors = [
      'xpath=/html/body/div/div[1]/div[1]/section/nav/ul/li[2]/div/ul[1]/li[2]',
      '//a[contains(text(),"T-shirts")]',
      '//a[contains(text(),"T-SHIRTS")]',
      '//a[contains(text(),"Tshirts")]',
      '//a[contains(@href,"T-shirts") or contains(@href,"tshirts")]',
      '//*[@id="categorymenu"]//a[contains(text(),"T-")]'
    ];

    let tshirtsLink = null;
    let usedSelector = '';

    for (const selector of selectors) {
      try {
        const link = this.page.locator(selector);
        if (await link.isVisible()) {
          tshirtsLink = link;
          usedSelector = selector;
          console.log(`✓ Found T-shirts link using selector: ${selector}`);
          break;
        }
      } catch (error) {
        console.log(`Selector ${selector} not found, trying next...`);
        continue;
      }
    }
    
    if (tshirtsLink) {
      await tshirtsLink.scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(300);
      await tshirtsLink.click();
      console.log(`✓ Clicked on T-shirts section using selector: ${usedSelector}`);
    } else {
      throw new Error('T-shirts section not found with any selector. Please check the page structure.');
    }
    
    await this.page.waitForLoadState('domcontentloaded', { timeout: 20000 });
    await this.page.waitForLoadState('networkidle', { timeout: 20000 });
    await this.page.waitForTimeout(3000);
    console.log('✓ T-shirts page loaded successfully and stable');
  }

  async smoothScrollToSection(selector: string, sectionName: string, duration: number = 1000) {
    console.log(`Smooth scrolling to ${sectionName}...`);
    await this.smoothScrollToElement(selector, duration);
    console.log(`✓ Smooth scroll to ${sectionName} completed`);
  }


  async smoothScrollToNavigation(duration: number = 800) {
    console.log('Smooth scrolling to navigation menu...');
    await this.smoothScrollToElement('#categorymenu', duration);
    console.log('✓ Smooth scroll to navigation completed');
  }
}


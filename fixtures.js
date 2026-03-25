import { test as base } from '@playwright/test';
import { PensionOrbital } from './pageObject/pension.orbital';

export const test = base.extend({
  retirePage: async ({ page }, use) => {
    const orbit = new PensionOrbital(page);
    await orbit.navigate();
    await use(orbit);
  }
});

export const expect = base.expect;
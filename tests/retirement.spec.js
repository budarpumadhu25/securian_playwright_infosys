import { test, expect } from '../fixtures.js';
import { cosmicPayload ,updatePayload} from '../testData.js';

test('Should submit with required fields', async ({ retirePage ,page}) => {
  await page.on('dialog', dialog => dialog.accept());
  await retirePage.fillCore(cosmicPayload);
});
test('Toggle social security fields', async ({ retirePage }) => {
  await retirePage.toggleSocialTrue();
  await expect(retirePage.toggleSocialTrue).toBeTruthy();
  await retirePage.toggleSocialSingle();
  await expect(retirePage.toggleSocialSingle).toBeTruthy();
  await retirePage.toggleSocialMarried();
  await expect(retirePage.toggleSocialMarried).toBeTruthy();
  await retirePage.toggleSocialFalse();
  await expect(retirePage.toggleSocialFalse).toBeTruthy();
});
test('Full journey submission', async ({ retirePage }) => {
  await retirePage.fillCore(cosmicPayload);
  await retirePage.submit();
  await retirePage.isResultVisible()
});
test('Update default values', async ({ retirePage }) => {
  await retirePage.updateFillCore(updatePayload);
  await retirePage.submit();
  await retirePage.isResultVisible()
});
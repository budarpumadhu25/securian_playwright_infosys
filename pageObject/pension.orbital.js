export class PensionOrbital {
  constructor(page) {
    this.page = page;

    this.currentAge = '#current-age';
    this.retirementAge = '#retirement-age';
    this.income = '#current-income';
    this.spouseIncome = '#spouse-income';
    this.savings = '#current-total-savings';
    this.contribution = '#current-annual-savings';
    this.increase = '#savings-increase-rate';

    this.socialToggleTrue = '//input[@id="yes-social-benefits"]';
    this.socialToggleFalse = '//input[@id="no-social-benefits"]';

    this.singleMarital = '#single';
    this.marriedMarital = '#married';
    this.maritalStatus = '#marital-status';
    this.override = '#social-security-override';

    this.calculateBtn = 'text=Calculate';
    this.resultChart = '#results-chart';
  }

  async navigate() {
    await this.page.goto('https://www.securian.com/insights-tools/retirement-calculator.html');
  }
  async fillCore(payload) {
    await this.page.fill(this.currentAge, payload.age);
    await this.page.fill(this.retirementAge, payload.retireAge);
    await this.page.fill(this.income, payload.income);
    await this.page.fill(this.spouseIncome, payload.spouseIncome);
    await this.page.fill(this.savings, payload.savings);
    await this.page.fill(this.contribution, payload.contribution );
    await this.page.fill(this.increase, payload.increase);
  }
  async updateFillCore(payload) {
    await this.page.fill(this.currentAge, payload.age);
    await this.page.fill(this.retirementAge, payload.retireAge);
    await this.page.fill(this.income, payload.income);
    await this.page.fill(this.spouseIncome, payload.spouseIncome);
    await this.page.fill(this.savings, payload.savings);
    await this.page.fill(this.contribution, payload.contribution );
    await this.page.fill(this.increase, payload.increase);
  }
  async toggleSocialTrue() {
    await this.page.locator(this.socialToggleTrue).check({ force: true });
  }
  async toggleSocialSingle() {
    await this.page.locator(this.singleMarital).check({ force: true });
   
  }
  async toggleSocialMarried() {
    await this.page.locator(this.marriedMarital).waitFor({ state: 'visible' });
    await this.page.locator(this.marriedMarital).check({ force: true });
  
  }
  async toggleSocialFalse() {
    await this.page.locator(this.socialToggleFalse).check({ force: true });
  }
  async submit() {
    await this.page.getByRole('button', { name: 'Calculate' }).click();
  }
  async isResultVisible() {
    await this.page.waitForSelector(this.resultChart, { state: 'visible' });
    return await this.page.locator(this.resultChart).isVisible();
  }
}
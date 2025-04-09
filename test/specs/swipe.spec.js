const SwipePage = require('../pageobjects/swipe.page');
const expect = require('chai').expect;

describe('Swipe', () => {

  it('deve fazer swipe horizontal', async () => {
    await SwipePage.btnMenuSwipe.click();
    await SwipePage.swipeHorizontal.click();
    const swipeHorizontal = await SwipePage.swipeHorizontal;
    expect(await swipeHorizontal.isDisplayed()).to.be.true;
  });
});
import { YazilimSozlukOnyuzPage } from './app.po';

describe('yazilim-sozluk-onyuz App', function() {
  let page: YazilimSozlukOnyuzPage;

  beforeEach(() => {
    page = new YazilimSozlukOnyuzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

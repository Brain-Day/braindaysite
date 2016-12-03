import { BraindaysitePage } from './app.po';

describe('braindaysite App', function() {
  let page: BraindaysitePage;

  beforeEach(() => {
    page = new BraindaysitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

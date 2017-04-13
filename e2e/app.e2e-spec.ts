import { FrontMapPage } from './app.po';

describe('front-map App', () => {
  let page: FrontMapPage;

  beforeEach(() => {
    page = new FrontMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

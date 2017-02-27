import { KavoshUIPage } from './app.po';

describe('kavosh-ui App', () => {
  let page: KavoshUIPage;

  beforeEach(() => {
    page = new KavoshUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

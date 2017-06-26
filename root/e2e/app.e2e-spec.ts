import { RootPage } from './app.po';

describe('root App', () => {
  let page: RootPage;

  beforeEach(() => {
    page = new RootPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

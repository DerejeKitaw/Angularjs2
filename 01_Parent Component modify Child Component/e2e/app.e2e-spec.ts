import { ParentToChildPage } from './app.po';

describe('parent-to-child App', () => {
  let page: ParentToChildPage;

  beforeEach(() => {
    page = new ParentToChildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

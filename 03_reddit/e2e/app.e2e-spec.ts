import { RedditPage } from './app.po';

describe('reddit App', () => {
  let page: RedditPage;

  beforeEach(() => {
    page = new RedditPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to reddit!');
  });
});

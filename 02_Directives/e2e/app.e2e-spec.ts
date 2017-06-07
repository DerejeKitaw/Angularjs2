import { DirectiveSamplePage } from './app.po';

describe('directive-sample App', () => {
  let page: DirectiveSamplePage;

  beforeEach(() => {
    page = new DirectiveSamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

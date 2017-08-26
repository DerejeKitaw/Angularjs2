import { browser, by, element } from 'protractor';

export class RedditPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('reddit-root h1')).getText();
  }
}

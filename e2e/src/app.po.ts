import {browser, by, element} from 'protractor';

export class MyDogSitterPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('my-dog-sitting h1')).getText() as Promise<string>;
  }
}

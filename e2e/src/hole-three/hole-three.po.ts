import {browser, by, element, ElementFinder} from 'protractor';

export class HoleThreePage {

  private durationDropdown: ElementFinder = element(by.id("mds-dog-duration-form-select"));
  private durationOption: ElementFinder = element(by.id("mds-dog-duration-option-5"));
  private publishForm: ElementFinder = element(by.id("mds-publish-button"));
  private duration: ElementFinder = element(by.id("mds-dog-duration-label"));


  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  selectDuration(): Promise<void> {
    this.durationDropdown.click();
    return this.durationOption.click() as Promise <void>;
  }

  publish(): Promise<void> {
    return this.publishForm.submit() as Promise<void>;
  }

  readDuration() {
    return this.duration.getText() as Promise<string>;
  }
}

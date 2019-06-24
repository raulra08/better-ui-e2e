import {browser, by, element} from 'protractor';

export class MyDogSitterPage {

  private dogNameInput = element(by.id("mds-dog-name-form-input"));
  private publishForm = element(by.css("form"));
  private dogName = element(by.id("mds-dog-name-label"));

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  enterDogsName(name: string): Promise<void> {
    return this.dogNameInput.sendKeys(name) as Promise<void>;
  }

  publish(): Promise<void> {
    return this.publishForm.submit() as Promise<void>;
  }

  readDogsName() {
    return this.dogName.getText() as Promise<string>;
  }
}

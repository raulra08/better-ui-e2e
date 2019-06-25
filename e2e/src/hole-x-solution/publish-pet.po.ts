import {browser, by, element, ElementFinder} from 'protractor';

export class MyDogSitterPage {

  private dogNameInput: ElementFinder = element(by.id("mds-dog-name-form-input"));
  private publishForm: ElementFinder = element(by.css("form"));
  private duration: ElementFinder = element(by.id("mds-dog-duration-label"));
  private breedDropdown: ElementFinder = element(by.id("mds-dog-breed-form-select"));
  private durationDropdown: ElementFinder = element(by.id("mds-dog-duration-form-select"));
  private breedOption: ElementFinder = element(by.id("mds-dog-breed-option-1"));
  private durationOption: ElementFinder = element(by.id("mds-dog-duration-option-5"));

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  enterDogsName(name: string): Promise<void> {
    return this.dogNameInput.sendKeys(name) as Promise<void>;
  }

  selectBreed(): Promise<void> {
    this.breedDropdown.click();
    return this.breedOption.click() as Promise <void>;
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

import {browser, by, element, ElementFinder} from 'protractor';

export class HoleFourPage {

    private dogNameInput: ElementFinder = element(by.id("mds-dog-name-form-input"));
    private durationDropdown: ElementFinder = element(by.id("mds-dog-duration-form-select"));
    private durationOption: ElementFinder = element(by.id("mds-dog-duration-option-5"));
    private publishForm: ElementFinder = element(by.id("mds-publish-button"));
    private duration: ElementFinder = element(by.id("mds-dog-duration-label"));
    private dogName: ElementFinder = element(by.id("mds-dog-name-label"));
    private breed: ElementFinder = element(by.id("mds-dog-breed-label"));
    private breedDropdown: ElementFinder = element(by.id("mds-dog-breed-form-select"));
    private breedOption: ElementFinder = element(by.id("mds-dog-breed-option-4"));

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    enterDogsName(name: string): Promise<void> {
        return this.dogNameInput.sendKeys(name) as Promise<void>;
    }

    selectBreed(): Promise<void> {
        this.breedDropdown.click();
        return this.breedOption.click() as Promise<void>;
    }

    selectDuration(): Promise<void> {
        this.durationDropdown.click();
        return this.durationOption.click() as Promise<void>;
    }

    publish(): Promise<void> {
        return this.publishForm.submit() as Promise<void>;
    }

    readDuration() {
        return this.duration.getText() as Promise<string>;
    }

    readDogName(): Promise<string> {
        return this.dogName.getText() as Promise<string>;
    }

    readBreed(): Promise<string> {
        return this.breed.getText() as Promise<string>;

    }
}

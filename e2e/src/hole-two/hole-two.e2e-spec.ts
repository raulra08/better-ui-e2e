import {browser, by, element} from "protractor";

beforeAll(() => {
    browser.get(browser.baseUrl) as Promise<any>;
});

describe("Given Freddy Fastfinger booked holidays for 2 weeks", () => {

    describe("When Freddy publishes Gia the beagle for dog-sitting", () => {

        it("Then Gia should be listed for a duration of 2 weeks", () => {

            element(by.id("mds-dog-duration-form-select")).click();
            element(by.id("mds-dog-duration-option-5")).click();
            element(by.id("mds-publish-button")).click();

            const duration: Promise<string> = element(by.id("mds-dog-duration-label")).getText() as Promise<string>;
            expect(duration).toEqual("2 weeks");
        });

    });

});

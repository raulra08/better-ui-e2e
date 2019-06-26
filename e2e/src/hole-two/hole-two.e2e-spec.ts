import {browser, by, element} from "protractor";

beforeAll(() => {
    browser.get(browser.baseUrl) as Promise<any>;
});

describe("Given Freddy Fastfinger opens the duration dropdown menu", () => {

    describe("When Freddy clicks on '2 weeks'", () => {

        it("Then Freddy should see the text '2 weeks'", () => {

            element(by.id("mds-dog-duration-form-select")).click();
            element(by.id("mds-dog-duration-option-5")).click();
            element(by.id("mds-publish-button")).click();

            const duration: Promise<string> = element(by.id("mds-dog-duration-label")).getText() as Promise<string>;
            expect(duration).toEqual("2 weeks");
        });

    });

});

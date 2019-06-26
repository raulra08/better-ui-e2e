import {by, element} from "protractor";
import {HoleThreePage} from "./hole-three.po";

let page: HoleThreePage;

beforeAll(() => {
    page = new HoleThreePage();
    page.navigateTo();
});

describe("Given Freddy Fastfinger booked holidays for 2 weeks", () => {

    describe("When Freddy publishes Gia the beagle for dog-sitting", () => {

        it("Then Gia should be listed for a duration of 2 weeks", () => {

            page.selectDuration();
            page.publish();
            const duration: Promise<string> = page.readDuration();

            expect(duration).toEqual("2 weeks");
        });

    });

});

import {HoleFourPage} from "./hole-four.po";

let page: HoleFourPage;

beforeAll(() => {
    page = new HoleFourPage();
    page.navigateTo();
});

describe("Given Vera Gile booked holidays for 2 weeks And Vera has 2 dogs", () => {

    describe("When Vera publishes her 2 dogs for dog-sitting", () => {

        it("Then Vera should be see her 2 dogs listed", () => {

            page.enterDogsName("Fiddo");
            page.selectBreed();
            page.selectDuration();
            page.publish();
            const fiddoDuration: Promise<string> = page.readDuration();
            const fiddoName: Promise<string> = page.readDogName();
            const fiddoBreed: Promise<string> = page.readBreed();

            page.enterDogsName("Didi");
            page.selectBreed();
            page.selectDuration();
            page.publish();

            const didiName: Promise<string> = page.readDogName();
            const didiBreed: Promise<string> = page.readBreed();
            const didiDuration: Promise<string> = page.readDuration();

            expect(fiddoName).toEqual("Fiddo");
            expect(fiddoBreed).toEqual("Cocker Spaniel");
            expect(fiddoDuration).toEqual("2 weeks");

            expect(didiName).toEqual("Didi");
            expect(didiBreed).toEqual("Cocker Spaniel");
            expect(didiDuration).toEqual("2 weeks");
        });

    });

});

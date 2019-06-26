import {MyDogSitterPage} from './publish-pet.po';

let page: MyDogSitterPage;

beforeAll(() => {
  page = new MyDogSitterPage();
  page.navigateTo();
});

describe("Given Freddy Fastfinger booked holidays for 2 weeks", () => {

  describe("When Freddy publishes Gia the beagle for dog-sitting", () => {

    it("Then Gia should be listed for a duration of 2 weeks", () => {

      page.enterDogsName("Gia");
      page.selectBreed();
      page.selectDuration();
      page.publish();
      expect(page.readDuration()).toEqual("2 weeks");
    });

  });

});

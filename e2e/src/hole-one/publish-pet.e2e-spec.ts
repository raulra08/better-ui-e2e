import {MyDogSitterPage} from './publish-pet.po';

let page: MyDogSitterPage;

beforeAll(() => {
  page = new MyDogSitterPage();
  page.navigateTo();
});

describe("Given Freddy Fastfinger is going on a 2 weeks holiday", () => {

  describe("When Freddy is publishing Gia the beagle on the web", () => {

    it("Then Freddy should be able to publish temporary care for a duration of 2 weeks", () => {

      page.enterDogsName("Gia");
      page.publish();
      expect(page.readDogsName()).toEqual("Gia");
    });

  });

});

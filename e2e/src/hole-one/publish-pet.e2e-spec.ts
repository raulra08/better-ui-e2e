import { MyDogSitterPage } from '../app.po';
import { browser, logging } from 'protractor';

describe("Given Freddy Fastfinger is going on a 2 weeks holiday", () => {
  let page: MyDogSitterPage;

  beforeEach(() => {
    page = new MyDogSitterPage();
  });

  describe("When Freddy is publishing Gia the beagle on the web", () => {

    it("Then Freddy should be able to publish temporary care for a duration of 2 weeks", () => {
      page.navigateTo();
      expect(page.getTitleText()).toEqual('Welcome to My Dog Sitter!');
    });

  });

});

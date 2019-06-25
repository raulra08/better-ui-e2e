import {IPublishedPet, SharedStoreService} from "./shared-store.service";

describe("The SharedStoreService", () => {

    let service: SharedStoreService;

    beforeEach(() => {
        service = new SharedStoreService();
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should store a pet that has been published", () => {
        const giaTheBeagle: IPublishedPet = {
            name: "Gia",
            breed: "Beagle",
            duration: "someTime",
        };
        service.publishedPet = giaTheBeagle;
        expect(service.publishedPet).toEqual(giaTheBeagle)
    });
});

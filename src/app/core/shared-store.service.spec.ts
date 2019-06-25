import {SharedStoreService} from "./shared-store.service";

describe("The SharedStoreService", () => {

    let service: SharedStoreService;

    beforeEach(() => {
        service = new SharedStoreService();
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should initialise publishedPet", () => {
        expect(service.publishedPet).toBeDefined();
    });
});

import {async, TestBed} from '@angular/core/testing';
import {HoleFourComponent} from './hole-four.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {IPublishedPet, SharedStoreService} from "../core/shared-store.service";

describe("The DogSitterAppComponent", () => {

    describe("TestBed", () => {
        let formBuilder: FormBuilder;
        let sharedStoreService: SharedStoreService;

        beforeEach(async(() => {
            formBuilder = new FormBuilder();
            sharedStoreService = new SharedStoreService();

            TestBed.configureTestingModule({
                declarations: [
                    HoleFourComponent
                ],
                imports: [
                    ReactiveFormsModule
                ],
                providers: [
                    {provide: SharedStoreService, useValue: sharedStoreService },
                    {provide: FormBuilder, useValue: formBuilder }
                ]
            }).compileComponents();
        }));

        it('should create the app', () => {
            const fixture = TestBed.createComponent(HoleFourComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        });
    });

    describe("Class", () => {

        describe("#onSubmit", () => {
            it("should save the published pet to the shared store", () => {
                const sharedStoreService: SharedStoreService = new SharedStoreService();
                const somePet: IPublishedPet = {name: "", breed: "", duration: ""};

                const component: HoleFourComponent = new HoleFourComponent(sharedStoreService, new FormBuilder());

                component.onSubmit(somePet);
                expect(sharedStoreService.publishedPet).toBeDefined();
            });
        });
    });
});

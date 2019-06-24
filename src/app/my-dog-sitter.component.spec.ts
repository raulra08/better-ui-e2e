import {async, TestBed} from '@angular/core/testing';
import {MyDogSitterComponent} from './my-dog-sitter.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

describe("The DogSitterAppComponent", () => {

    describe("TestBed", () => {
        let formBuilder: FormBuilder;

        beforeEach(async(() => {
            formBuilder = new FormBuilder();

            TestBed.configureTestingModule({
                declarations: [
                    MyDogSitterComponent
                ],
                imports: [
                    ReactiveFormsModule
                ],
                providers: [
                    {provide: FormBuilder, useValue: formBuilder }
                ]
            }).compileComponents();
        }));

        it('should create the app', () => {
            const fixture = TestBed.createComponent(MyDogSitterComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        });
    });

    describe("#onSubmit", () => {
        it("should set the class' dog name with the submited dog name", () => {
            const component: MyDogSitterComponent = new MyDogSitterComponent(new FormBuilder());
            component.onSubmit({name: "Gia", breed: "Beagle", duration: "1/2 day"});
            expect(component.name).toEqual("Gia")
        });
    });
});

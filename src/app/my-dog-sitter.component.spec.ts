import {async, TestBed} from '@angular/core/testing';
import {MyDogSitterComponent} from './my-dog-sitter.component';

describe("The DogSitterAppComponent", () => {

    describe("TestBed", () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    MyDogSitterComponent
                ],
            }).compileComponents();
        }));

        it('should create the app', () => {
            const fixture = TestBed.createComponent(MyDogSitterComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        });
    });
});

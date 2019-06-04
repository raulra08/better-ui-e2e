import {async, TestBed} from '@angular/core/testing';
import {DogSitterAppComponent} from './dog-sitter-app.component';

describe("The DogSitterAppComponent", () => {

    describe("TestBed", () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    DogSitterAppComponent
                ],
            }).compileComponents();
        }));

        it('should create the app', () => {
            const fixture = TestBed.createComponent(DogSitterAppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        });
    });
});

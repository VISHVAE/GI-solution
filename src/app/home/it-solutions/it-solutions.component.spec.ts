import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSolutionsComponent } from './it-solutions.component';

describe('ItSolutionsComponent', () => {
  let component: ItSolutionsComponent;
  let fixture: ComponentFixture<ItSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItSolutionsComponent]
    });
    fixture = TestBed.createComponent(ItSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

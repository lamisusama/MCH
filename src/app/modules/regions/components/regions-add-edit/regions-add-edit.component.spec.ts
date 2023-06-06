import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsAddEditComponent } from './regions-add-edit.component';

describe('RegionsAddEditComponent', () => {
  let component: RegionsAddEditComponent;
  let fixture: ComponentFixture<RegionsAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionsAddEditComponent]
    });
    fixture = TestBed.createComponent(RegionsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

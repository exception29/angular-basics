import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FchildcomponentComponent } from './fchildcomponent.component';

describe('FchildcomponentComponent', () => {
  let component: FchildcomponentComponent;
  let fixture: ComponentFixture<FchildcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FchildcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FchildcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

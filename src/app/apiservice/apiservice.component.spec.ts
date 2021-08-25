import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIserviceComponent } from './apiservice.component';

describe('APIserviceComponent', () => {
  let component: APIserviceComponent;
  let fixture: ComponentFixture<APIserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

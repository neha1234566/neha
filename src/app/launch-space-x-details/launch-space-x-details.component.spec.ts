import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchSpaceXDetailsComponent } from './launch-space-x-details.component';

describe('LaunchSpaceXDetailsComponent', () => {
  let component: LaunchSpaceXDetailsComponent;
  let fixture: ComponentFixture<LaunchSpaceXDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchSpaceXDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchSpaceXDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

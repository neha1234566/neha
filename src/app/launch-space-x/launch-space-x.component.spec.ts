import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchSpaceXComponent } from './launch-space-x.component';

describe('LaunchSpaceXComponent', () => {
  let component: LaunchSpaceXComponent;
  let fixture: ComponentFixture<LaunchSpaceXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchSpaceXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchSpaceXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

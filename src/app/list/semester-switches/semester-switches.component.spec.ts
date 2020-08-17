import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterSwitchesComponent } from './semester-switches.component';

describe('SemesterSwitchesComponent', () => {
  let component: SemesterSwitchesComponent;
  let fixture: ComponentFixture<SemesterSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

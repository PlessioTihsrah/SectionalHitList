import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSwitchesComponent } from './section-switches.component';

describe('SectionSwitchesComponent', () => {
  let component: SectionSwitchesComponent;
  let fixture: ComponentFixture<SectionSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

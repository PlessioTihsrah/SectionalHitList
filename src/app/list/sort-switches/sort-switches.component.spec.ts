import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSwitchesComponent } from './sort-switches.component';

describe('SortSwitchesComponent', () => {
  let component: SortSwitchesComponent;
  let fixture: ComponentFixture<SortSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

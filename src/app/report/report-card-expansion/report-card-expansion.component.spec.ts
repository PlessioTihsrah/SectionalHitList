import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCardExpansionComponent } from './report-card-expansion.component';

describe('ReportCardExpansionComponent', () => {
  let component: ReportCardExpansionComponent;
  let fixture: ComponentFixture<ReportCardExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCardExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCardExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

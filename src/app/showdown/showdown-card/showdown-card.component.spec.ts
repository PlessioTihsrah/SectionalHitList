import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdownCardComponent } from './showdown-card.component';

describe('ShowdownCardComponent', () => {
  let component: ShowdownCardComponent;
  let fixture: ComponentFixture<ShowdownCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdownCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdownCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

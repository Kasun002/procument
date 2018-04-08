import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAreaComponent } from './dash-area.component';

describe('DashAreaComponent', () => {
  let component: DashAreaComponent;
  let fixture: ComponentFixture<DashAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

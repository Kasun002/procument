import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSelectedComponent } from './dash-selected.component';

describe('DashSelectedComponent', () => {
  let component: DashSelectedComponent;
  let fixture: ComponentFixture<DashSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

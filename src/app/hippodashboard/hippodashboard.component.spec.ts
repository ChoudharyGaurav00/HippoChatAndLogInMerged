import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HippodashboardComponent } from './hippodashboard.component';

describe('HippodashboardComponent', () => {
  let component: HippodashboardComponent;
  let fixture: ComponentFixture<HippodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HippodashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HippodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

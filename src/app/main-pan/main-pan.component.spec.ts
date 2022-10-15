import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPanComponent } from './main-pan.component';

describe('MainPanComponent', () => {
  let component: MainPanComponent;
  let fixture: ComponentFixture<MainPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

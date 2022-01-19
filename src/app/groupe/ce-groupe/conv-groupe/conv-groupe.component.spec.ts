import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvGroupeComponent } from './conv-groupe.component';

describe('ConvGroupeComponent', () => {
  let component: ConvGroupeComponent;
  let fixture: ComponentFixture<ConvGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeGroupeComponent } from './ce-groupe.component';

describe('CeGroupeComponent', () => {
  let component: CeGroupeComponent;
  let fixture: ComponentFixture<CeGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionGroupeComponent } from './competition-groupe.component';

describe('CompetitionGroupeComponent', () => {
  let component: CompetitionGroupeComponent;
  let fixture: ComponentFixture<CompetitionGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

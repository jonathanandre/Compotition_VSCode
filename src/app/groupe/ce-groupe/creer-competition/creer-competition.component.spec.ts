import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCompetitionComponent } from './creer-competition.component';

describe('CreerCompetitionComponent', () => {
  let component: CreerCompetitionComponent;
  let fixture: ComponentFixture<CreerCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

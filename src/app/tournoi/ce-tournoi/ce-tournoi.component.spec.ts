import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTournoiComponent } from './ce-tournoi.component';

describe('CeTournoiComponent', () => {
  let component: CeTournoiComponent;
  let fixture: ComponentFixture<CeTournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeTournoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotesComponent } from './potes.component';

describe('PotesComponent', () => {
  let component: PotesComponent;
  let fixture: ComponentFixture<PotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

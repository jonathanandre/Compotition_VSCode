import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixfavoriComponent } from './choixfavori.component';

describe('ChoixfavoriComponent', () => {
  let component: ChoixfavoriComponent;
  let fixture: ComponentFixture<ChoixfavoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixfavoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixfavoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

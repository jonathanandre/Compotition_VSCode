import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncienpariComponent } from './ancienpari.component';

describe('AncienpariComponent', () => {
  let component: AncienpariComponent;
  let fixture: ComponentFixture<AncienpariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncienpariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncienpariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

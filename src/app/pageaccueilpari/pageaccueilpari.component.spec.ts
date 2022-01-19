import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaccueilpariComponent } from './pageaccueilpari.component';

describe('PageaccueilpariComponent', () => {
  let component: PageaccueilpariComponent;
  let fixture: ComponentFixture<PageaccueilpariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageaccueilpariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageaccueilpariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

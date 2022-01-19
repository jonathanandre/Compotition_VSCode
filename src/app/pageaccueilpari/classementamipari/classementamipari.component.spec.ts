import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementamipariComponent } from './classementamipari.component';

describe('ClassementamipariComponent', () => {
  let component: ClassementamipariComponent;
  let fixture: ComponentFixture<ClassementamipariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementamipariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementamipariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

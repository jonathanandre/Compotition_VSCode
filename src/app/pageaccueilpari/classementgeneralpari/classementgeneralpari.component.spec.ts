import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementgeneralpariComponent } from './classementgeneralpari.component';

describe('ClassementgeneralpariComponent', () => {
  let component: ClassementgeneralpariComponent;
  let fixture: ComponentFixture<ClassementgeneralpariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementgeneralpariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementgeneralpariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

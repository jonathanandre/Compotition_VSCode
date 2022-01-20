import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteGroupeComponent } from './invite-groupe.component';

describe('InviteGroupeComponent', () => {
  let component: InviteGroupeComponent;
  let fixture: ComponentFixture<InviteGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationGroupeComponent } from './invitation-groupe.component';

describe('InvitationGroupeComponent', () => {
  let component: InvitationGroupeComponent;
  let fixture: ComponentFixture<InvitationGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationRecuComponent } from './invitation-recu.component';

describe('InvitationRecuComponent', () => {
  let component: InvitationRecuComponent;
  let fixture: ComponentFixture<InvitationRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationRecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

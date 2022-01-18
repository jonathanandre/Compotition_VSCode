import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePoteComponent } from './message-pote.component';

describe('MessagePoteComponent', () => {
  let component: MessagePoteComponent;
  let fixture: ComponentFixture<MessagePoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

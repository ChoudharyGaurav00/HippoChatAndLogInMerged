import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatwindowmsgComponent } from './chatwindowmsg.component';

describe('ChatwindowmsgComponent', () => {
  let component: ChatwindowmsgComponent;
  let fixture: ComponentFixture<ChatwindowmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatwindowmsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatwindowmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatwindowheaderComponent } from './chatwindowheader.component';

describe('ChatwindowheaderComponent', () => {
  let component: ChatwindowheaderComponent;
  let fixture: ComponentFixture<ChatwindowheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatwindowheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatwindowheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

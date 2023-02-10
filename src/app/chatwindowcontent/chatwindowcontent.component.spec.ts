import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatwindowcontentComponent } from './chatwindowcontent.component';

describe('ChatwindowcontentComponent', () => {
  let component: ChatwindowcontentComponent;
  let fixture: ComponentFixture<ChatwindowcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatwindowcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatwindowcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

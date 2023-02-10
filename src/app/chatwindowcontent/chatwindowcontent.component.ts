import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ChatdataService } from '../chatdata.service';
import { chatInterface } from '../chatInf';

@Component({
  selector: 'app-chatwindowcontent',
  templateUrl: './chatwindowcontent.component.html',
  styleUrls: ['./chatwindowcontent.component.css']
})
export class ChatwindowcontentComponent implements OnInit {
  // public selectedChatId:number=-1;
  chatsArr: chatInterface[] = [];
  currentChat: chatInterface = {} as chatInterface;
  public show: boolean = false;
  constructor(public route: ActivatedRoute, public chatservice: ChatdataService) { }
  ngOnInit() {

    this.chatsArr = this.chatservice.chatArr;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(this.route.snapshot.paramMap.get('id') as string);

      this.chatservice.selectedChatId = id;
      console.log('chat id is', this.chatservice.selectedChatId);
      if (this.chatsArr.length > 0) {
        this.show = true;
      }

      this.currentChat = this.chatsArr[id];
    });
  }
}

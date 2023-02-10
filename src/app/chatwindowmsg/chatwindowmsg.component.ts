import { Component } from '@angular/core';
import { ChatdataService } from '../chatdata.service';
import { messageInterface } from '../msgInterface';
@Component({
  selector: 'app-chatwindowmsg',
  templateUrl: './chatwindowmsg.component.html',
  styleUrls: ['./chatwindowmsg.component.css']
})
export class ChatwindowmsgComponent {

  constructor(public chatservice: ChatdataService) { }
  public curDate = new Date();


  storeCurrentMsg(message: string, sender: number) {
    // let sndr="A";
    this.curDate = new Date();
    let time = this.curDate;
    let currentMsg: messageInterface = {} as messageInterface;
    currentMsg.content = message;
    currentMsg.senderType = sender;
    currentMsg.time = this.curDate;
    this.chatservice.chatArr[this.chatservice.selectedChatId].messageArr.push(currentMsg);

    console.log("current Msg", currentMsg);


    console.log("chats array", this.chatservice.chatArr);

  }

  agentChat(message: HTMLElement) {
    console.log("in agent chat");
    let content = message.innerText;
    let sender = 1;
    this.storeCurrentMsg(content, sender);

  }
  userChat(message: HTMLElement) {
    console.log("in user chat");
    console.log(message);

    let content = message.innerText;
    console.log("storing message", content);
    let sender = 0;
    this.storeCurrentMsg(content, sender);

  }
}

import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { chatInterface } from './chatInf';
import { messageInterface } from './msgInterface';
import { OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ChatdataService {

  public keyNum: number = 0;
  public agentS: string = "A";
  public chatArr: chatInterface[] = [];

  constructor() {
    // this.currentMessage.timeArr=new Array();
  }

  public selectedChatId = -1;
  public curDate = new Date();
  storeData(usr: string) {
    let welcomeMsg: string = "Welcome to hippo chat";
    let currentMessage: messageInterface = {} as messageInterface;
    let currentChat: chatInterface = {} as chatInterface;
    // console.log(usr);
    // currentMessage.key=this.keyNum;
    // currentMessage.username=usr;
    console.log("storing data ");

    this.curDate = new Date();


    currentMessage.time = (this.curDate);
    currentMessage.senderType = 1;
    currentMessage.content = welcomeMsg;
    // console.log("message content");
    // console.log(currentMessage);

    currentChat.key = this.keyNum;
    currentChat.username = usr;
    currentChat.messageArr = [];
    currentChat.messageArr.push(currentMessage);
    this.chatArr.push(currentChat);
    // console.log("Current Chat");
    // console.log(currentChat);

    console.log("chat array");
    console.log(this.chatArr)

    this.keyNum++;


  }

}

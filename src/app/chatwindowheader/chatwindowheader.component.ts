import { Component, OnInit } from '@angular/core';
import { ChatdataService } from '../chatdata.service';
@Component({
  selector: 'app-chatwindowheader',
  templateUrl: './chatwindowheader.component.html',
  styleUrls: ['./chatwindowheader.component.css']
})
export class ChatwindowheaderComponent implements OnInit {

  constructor(public chatService: ChatdataService) { }
  initiateChat(name: string) {
    // console.log(name);
    this.chatService.storeData(name);
  }
  ngOnInit() {
  }
}

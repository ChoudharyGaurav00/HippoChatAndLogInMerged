import { Component, OnInit } from '@angular/core';
import { ChatdataService } from '../chatdata.service';
import { chatInterface } from '../chatInf';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allchats',
  templateUrl: './allchats.component.html',
  styleUrls: ['./allchats.component.css']
})
export class AllchatsComponent implements OnInit {
  public chatsArr: chatInterface[] = [];

  constructor(public chatService: ChatdataService, public router: Router) { }
  // constructor(private router:Router){}

  ngOnInit() {
    // console.warn("in all chats");  
    // console.warn(this.chats.msgArr);
    this.chatsArr = this.chatService.chatArr;
    // console.warn("exit all chats");  

  }
  selectUser(id: number) {
    console.log("selecting user ", id);
    this.chatService.selectedChatId = id;
    // this.router.navigate(['dashboard/chatwindowcontent', id]);
    // this.router.navigate(['/chatwindowcontent']);
  }



}


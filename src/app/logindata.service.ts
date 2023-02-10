import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  constructor() { }
  changeSelectorFlag: boolean = true;
  saveSignUpData(userSignUpData: any) {
    let arr = [];
    if (localStorage.getItem('signupUsers') === null) {

    }
    else {
      arr = JSON.parse(localStorage.getItem('signupUsers') as string);
    }
    console.warn(arr, 'varia', typeof (arr));
    let name = userSignUpData.contactname;
    let password = userSignUpData.password;
    let emailId = userSignUpData.emailid;
    let flag = true;
    for (let element in arr) {
      console.log("in array", element, "current mail", emailId);
      if (arr[element] == emailId) {
        flag = false;
        break;
      }
    }

    if (flag) {
      console.log('true block');
      arr.push(emailId);
      console.log("saving", arr);
      localStorage.setItem('signupUsers', JSON.stringify(arr));
    }
    else {
      console.log('false block');
      alert('Gmail already exist');
    }

  }

}

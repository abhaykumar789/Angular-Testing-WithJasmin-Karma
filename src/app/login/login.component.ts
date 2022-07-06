import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "admin";
  name: string = "";
  myform: FormGroup;
  constructor() {
    this.name = this.getUserName("Hello");
    this.myform = new FormGroup({
      uname: new FormControl(""),
      pwd: new FormControl("")
    });
  }

  ngOnInit() {}

  getUserName(input: any) {
    var output = input + " " + this.username;
    return output;
  }

  check() {
    console.log(this.myform.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  
    //  IMPORTING A-ROUTINGS
  constructor(private router: Router) { }


  ngOnInit() {
  }
  login(){
    this.router.navigate(["login"])
  }
}

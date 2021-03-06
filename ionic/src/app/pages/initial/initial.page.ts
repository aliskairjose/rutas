import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoSignup(){
    this.router.navigate(['/signin']);
  }

}

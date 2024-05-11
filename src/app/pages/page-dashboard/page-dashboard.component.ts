import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}

}

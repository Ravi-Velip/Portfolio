import { Component, OnInit } from '@angular/core';
declare var typedEffect: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  roles: any = []

  constructor() { }

  ngOnInit(): void {

    typedEffect()

  }

}

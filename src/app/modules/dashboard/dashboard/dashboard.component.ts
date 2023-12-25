import { Component, OnInit } from '@angular/core';
declare var typedEffect: any;
declare var logo: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  variable: "varName" 

  constructor() { }

  ngOnInit(): void {

    // logo();

    typedEffect()
  
//     const options = {
//       strings: ['Innovation.', 'Discovery.'],
//       typeSpeed: 100,
//       backSpeed: 100,
//       showCursor: true,
//       cursorChar: '|',
//       loop: true
//  };
 
//  const typed = new Typed('.cd-words-wrapper', options);

  }



  function myFunction(){

    while(1>0){
      console.log("true")
    }

  }




}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification-show',
  templateUrl: './certification-show.component.html',
  styleUrls: ['./certification-show.component.scss']
})
export class CertificationShowComponent implements OnInit {

  link = [
    {
      link: "../../../../assets/images/hr.png"
    },
    {
      link: "../../../../assets/images/hr.png"
    },
    {
      link: "../../../../assets/images/hr.png"
    }
  ]

  // link = "https://www.hackerrank.com/certificates/dad8b223c4fe"

  constructor() { }

  ngOnInit(): void {
    console.log(this.link)
  }

}

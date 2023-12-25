import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.scss']
})
export class ToDoAppComponent implements OnInit {

  name: any;  
  
  inputData = "";
  isUpdate : boolean = false;
  index = 0;
  updatedData = "";
  listData = [
                "Todays Work is to build app",
                "Tommorow will apply for job",
                "Day After Tommorow will give interview",
                "Will recieve a job"
              ]

  constructor() { }

  ngOnInit(): void {
  }

submit(){
  this.listData.push(this.inputData)
  console.log("INPUT DATA", this.inputData);
}

updateData(value: string, index: number){
  this.isUpdate = true;
  this.updatedData = value;
  this.index = index;
}

saveData(){
  this.listData[this.index] = this.updatedData;
  this.isUpdate = false;

}

deleteData(){
  this.listData.pop();
}



parentData(data: any){

  this.name = data

}


}

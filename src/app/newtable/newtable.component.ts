import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service'


@Component({
  selector: 'app-newtable',
  templateUrl: './newtable.component.html',
  styleUrls: ['./newtable.component.css']
})
export class NewtableComponent implements OnInit {

  constructor(private myservice: FirstService){ }
  value:string;
  name:string;
  header ;
  getValue(){
    this.value = this.myservice.getdata();
    this.header=Object.keys(this.value[0]);
  }
  ngOnInit(){
    this.myservice.setdata();
  }


}

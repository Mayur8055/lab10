import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-word',
  templateUrl: './filter-word.component.html',
  styleUrls: ['./filter-word.component.css']
})
export class FilterWordComponent implements OnInit {
  public word:string="";
  public searchTerm:string="";
  public ppl:any[]=["Eena","Meena","dEEKA"];
  constructor() { }

  ngOnInit(): void {
  }

}

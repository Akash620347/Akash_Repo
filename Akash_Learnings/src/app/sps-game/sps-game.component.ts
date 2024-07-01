import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sps-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sps-game.component.html',
  styleUrl: './sps-game.component.css'
})
export class SpsGameComponent{

  @Input() cardDetails={
    cardId:"",
    totalSum:"",
    label:"",
    bgColor:"",
    borderColor:"",
    childList:[
      {
        label:"",
        value:""
      },
      {
        label:"",
        value:""
      }
    ]
  }
  @Output() allData:any = new EventEmitter<any>();

  clickedStatus=false;

  constructor(private http : HttpClient){}
}

  
  

import { Component, OnInit } from '@angular/core';
import { SpsGameComponent } from '../sps-game/sps-game.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SpsGameComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  cardArr:any[] = [];
  showClearAll: any = false;


  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.loadData();
  }

  apiCallData(val: any, cardDetail: any) {
    if (val) {
      this.cardArr.push(cardDetail.label)
      this.showClearAll = true;
      console.log("show clear all",this.showClearAll);
      
    }
    console.log("==============", val, cardDetail);
  }

  onCross() {
    
  }
  clearAll(){
    while(this.cardArr.length > 0){
      this.cardArr.pop();
    }
    this.showClearAll = false;
  }

  keyValue = [
    {
      cardId: "A",
      key: "estimated",
      label: "Estimated",
      bgColor: "rgba(4, 149, 234, 0.1)",
      borderColor: "rgb(4, 149, 234)"

    },
    {
      cardId: "B",
      key: "accrued",
      label: "Accrued",
      bgColor: "rgba(253, 94, 126, 0.1)",
      borderColor: "rgb(253, 94, 126)"
    },
    {
      cardId: "C",
      key: "invoicedProvisional",
      label: "Invoiced: Provisional",
      bgColor: "rgba(99, 198, 48, 0.1)",
      borderColor: "rgb(99, 198, 48)"
    },
    {
      cardId: "D",
      key: "invoicedFinal",
      label: "Invoiced: Final",
      bgColor: "rgba(241, 146, 2, 0.1)",
      borderColor: "rgb(241, 146, 2)"
    }
  ]

  finalObject: any[] = []

  loadData() {
    //   let dateRange={
    //     "fromDate": "2024-06-30T08:41:25.929Z",
    //     "toDate": "2024-07-30T08:41:25.929Z"
    // }
    this.finalObject = [];
    let resp: any = {
      "estimated": {
        "total": 218,
        "costType": 15,
        "receivableCount": null,
        "tradeType": 203,
        "payableCount": null
      },
      "accrued": {
        "total": 49,
        "costType": 27,
        "receivableCount": null,
        "tradeType": 22,
        "payableCount": null
      },
      "invoicedFinal": {
        "total": 0,
        "costType": 0,
        "receivableCount": null,
        "tradeType": 0,
        "payableCount": null
      },
      "invoicedProvisional": {
        "total": 0,
        "costType": 0,
        "receivableCount": null,
        "tradeType": 0,
        "payableCount": null
      },
      "dncn": {
        "total": 46,
        "costType": 27,
        "receivableCount": null,
        "tradeType": 19,
        "payableCount": null
      },
      "planned": null,
      "unplanned": null,
      "actualized": null
    }
    // this.http.post(`https://dev.ctrm-xceler.com/ctrm-api/api/cashflow/v1/gettradecoststats?tenantId=d7408d31-d720-4173-b76e-0595ce2679b4`,dateRange).subscribe((resp:any)=>{     
    this.keyValue.forEach(element => {
      let tempObj = resp[element.key];
      let obj = {
        cardId: element.cardId,
        totalSum: tempObj['total'],
        label: element.label,
        bgColor: element.bgColor,
        borderColor: element.borderColor,
        childList: [
          {
            label: "Trade",
            value: tempObj['tradeType']
          },
          {
            label: "Cost",
            value: tempObj['costType']
          }
        ]
      }
      this.finalObject.push(obj)
    });
    // })
    console.log(this.finalObject);
  }

} 

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-getannualreport',
  templateUrl: './getannualreport.component.html',
  styleUrls: ['./getannualreport.component.scss']
})
export class GetannualreportComponent implements OnInit {
  annualdata: any[]=[];
 
  
  constructor(private service:ServiceService){
  }

  ngOnInit(): void {
      this.getAnnualData();
      // console.log('hi')
  }
  getAnnualData(){
    this.service.getannualreport().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.annualdata=resultData;
    });
  }

}

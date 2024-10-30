import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-getaffiliates',
  templateUrl: './getaffiliates.component.html',
  styleUrls: ['./getaffiliates.component.scss']
})
export class GetaffiliatesComponent implements OnInit {
  affiliatesdata:any[]=[];
  
  
  constructor(private service:ServiceService){
  }

  ngOnInit(): void {
      this.getAffiliatesData();
      // console.log('hi')
  }
  getAffiliatesData(){
    this.service.getaffiliates().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.affiliatesdata=resultData;
    });
  }

}

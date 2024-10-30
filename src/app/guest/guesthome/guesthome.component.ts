import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-guesthome',
  templateUrl: './guesthome.component.html',
  styleUrls: ['./guesthome.component.scss']
})
export class GuesthomeComponent implements OnInit{
  
  institution: any[]=[];
  boarddata: any;
  eventsdata: any;
  affiliatesdata: any;
  bylawdata: any;
  
  constructor(private service:ServiceService){}
  ngOnInit(): void {
    this.getInstitutionData();
    this.getBoardData();
    this.getEventsData();
    this.getAffiliatesData();
    this.getLawData();
  }



  getInstitutionData() {
    this.service.getinstitution().subscribe((response:any)=>
    {
      console.log(response);
      this.institution=response;
    });
  }
  getBoardData(){
    this.service. getmember().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.boarddata=resultData;
    });
  }
  getEventsData(){
    this.service.getevents().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.eventsdata=resultData;
    });
  }
  getAffiliatesData(){
    this.service.getaffiliates().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.affiliatesdata=resultData;
    });
  }
  getLawData(){
    this.service.getbylaw().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.bylawdata=resultData;
    });
  }
  subscribe={
    email:'',
    password:'',
   
   
};
  





 
}



import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-getevents',
  templateUrl: './getevents.component.html',
  styleUrls: ['./getevents.component.scss']
})
export class GeteventsComponent implements OnInit {
  eventsdata: any[]=[];

  constructor(private service:ServiceService){
  }

  ngOnInit(): void {
      this.getEventsData();
     
  }
  getEventsData(){
    this.service.getevents().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.eventsdata=resultData;
    });
  }

}

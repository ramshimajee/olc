import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-eventsview',
  templateUrl: './eventsview.component.html',
  styleUrls: ['./eventsview.component.scss']
})
export class EventsviewComponent implements OnInit {

  eventsdata: any[]=[];

  constructor(private service:ServiceService,private router: Router){
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
  delete(data:any){
    console.log(data)
    this.service.deleteevents(data).subscribe(
      (response)=>{
        console.log(response);
        alert("data deleted")
        location.reload();
      });
  }
  
  edit(id:any){
    this.router.navigate(['adminmaster/eventsedit',id] )
  }


}

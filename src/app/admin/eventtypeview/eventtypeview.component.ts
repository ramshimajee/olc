import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-eventtypeview',
  templateUrl: './eventtypeview.component.html',
  styleUrls: ['./eventtypeview.component.scss']
})
export class EventtypeviewComponent implements OnInit{
  eventtype: any[]=[];
 
  
  
  constructor(private service:ServiceService, private router: Router){}

  ngOnInit(): void {
    this. getEventtypeData();
  
      
  }
  getEventtypeData() {
    this.service.geteventtype().subscribe((response:any)=>
    {
      console.log(response);
      this.eventtype=response;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deleteeventtype(data).subscribe(
      (response: any)=>{
        console.log(response);
        alert("data deleted")
        location.reload();

      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/eventtypeedit',id] )
  }




}

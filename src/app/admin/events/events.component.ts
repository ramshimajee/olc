import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events={
    eventname:'',
    eventdate:'',
    eventtime:'',
    stateid:'',
    districtid:'',
    eventplace:'',
    eventdescription:'',
    eventtype:'',
    eventbrochure:null as File | null ,
    
};
  
  state: any[]=[];
  stateid: any;
  district: any;
  eventtype: any;
  
  
 
constructor(private service:ServiceService,private router: Router){}
ngOnInit(): void {
  this.getStateData();
  this.getEventtypeData();

}
getStateData(){
  this.service.getstates().subscribe((response: any)=>{
  this.state = response;
  console.log(this.state)
  });
  

}
DropdownChange(event: any) {
  this.stateid=this.events.stateid;
  console.log(this.stateid)
  this.service.getdistrictbyid(this.stateid).subscribe(response =>{
  this.district =response
  console.log(this.district)
  
  });
}


onFileSelected(event: any) {
  this.events.eventbrochure = event.target.files[0];
  console.log(this.events.eventbrochure);
}

getEventtypeData(){
  this.service.geteventtype().subscribe((resultData: any)=>
  {
  console.log(resultData);
  this.eventtype = resultData;
  });
  

}

submit(){
  const formData=new FormData();
  formData.append('eventname',this.events.eventname)
  formData.append('eventdate',this.events.eventdate)
  formData.append('eventtime',this.events.eventtime)
  formData.append('stateid',this.events.stateid)
  formData.append('districtid',this.events.districtid)
  formData.append('eventplace',this.events.eventplace)
  formData.append('eventdescription',this.events.eventdescription)
  formData.append('eventtype',this.events.eventtype)
  if (this.events.eventbrochure){
    formData.append('eventbrochure',this.events.eventbrochure)
  }
  console.log(formData)
  this.service.events(formData).subscribe((response)=>{
    console.log(response);
    alert('event added');
    this.router.navigate(['adminmaster/eventsview'])
  },);

 0


}

}

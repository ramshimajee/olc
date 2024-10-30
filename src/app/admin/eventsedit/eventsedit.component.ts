import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-eventsedit',
  templateUrl: './eventsedit.component.html',
  styleUrls: ['./eventsedit.component.scss']
})
export class EventseditComponent implements OnInit {
  events={
    eventname:'',
    eventdate:'',
    eventtime:'',
    stateid:'',
    districtid:'',
    eventplace:'',
    eventdescription:'',
    eventtype:'',
    eventbrochure:null as File | null 
};
  data: any;
  eventdata: any;
  eventbrochure: any;
  state: any[]=[];
  stateid: any;
  district: any;
  eventtype: any;
  
 
constructor(private service:ServiceService, private router:Router, private route:ActivatedRoute,private http:HttpClient){
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.data = params.get('id');
  });

}
ngOnInit(): void {
  this.getStateData();
  this.get_districtdata();
  this.getEventtypeData();
  // console.log(this.data); 
  this.service.geteventsData(this.data).subscribe(response=>{
    this.eventdata = response
    console.log(this.eventdata)
    this.eventbrochure=this.eventdata[0].eventbrochure
    // console.log(this.eventbrochure)
    this.events={
      eventname:this.eventdata[0].eventname,
      eventdate:this.eventdata[0].eventdate,
      eventtime:this.eventdata[0].eventtime,
      stateid:this.eventdata[0].state.stateid,
      districtid:this.eventdata[0].district.districtid,
      eventplace:this.eventdata[0].eventplace,
      eventdescription:this.eventdata[0].eventdescription,
      eventtype:this.eventdata[0].eventtype.id,
      eventbrochure:this.eventdata[0].eventbrochure

    };
  });

}
getStateData(){
  this.service.getstates().subscribe((response: any)=>{
  this.state = response;
  console.log(this.state)
  });
  

}
get_districtdata() {
  this.service.getdistrict().subscribe((resultData:any)=>
  {
    console.log(resultData);
    this.district = resultData;
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
  

  this.service.updateevents(this.data,formData).subscribe(
    (response) =>{
      console.log('events updated:', response);
      alert('events updated successfully')
      this.router.navigate(['adminmaster/eventsview']);
    },
    (error) =>{
      console.error('Error events',error);
      alert('Error upadting events');
    }
  )
  }

}

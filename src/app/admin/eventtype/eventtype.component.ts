import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-eventtype',
  templateUrl: './eventtype.component.html',
  styleUrls: ['./eventtype.component.scss']
})
export class EventtypeComponent implements OnInit {
  eventtype={
    eventtypename:'',
    eventtypedescription:'',
   
};
  eventtypeData: any;
  
  
 
constructor(private service:ServiceService, private router: Router){}

ngOnInit(): void {
    this.eventtypeData();
    
}



submit(){
  const formData=new FormData();
  formData.append('eventtypename',this.eventtype.eventtypename)
  formData.append('eventtypedescription',this.eventtype.eventtypedescription)
  
  console.log(formData)
  this.service. addeventtype(formData).subscribe((response)=>{
    console.log(response);
    alert('Eventtype added');
    this.router.navigate(['adminmaster/eventtypeview'])
  },);

 


}

}

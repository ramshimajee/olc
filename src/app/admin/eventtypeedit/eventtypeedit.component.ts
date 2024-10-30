import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-eventtypeedit',
  templateUrl: './eventtypeedit.component.html',
  styleUrls: ['./eventtypeedit.component.scss']
})
export class EventtypeeditComponent implements OnInit {
  eventtype={
    eventtypename:'',
    eventtypedescription:''  
  } 
  
  
  
  
  data: any;
  eventtypedata: any;
  
  constructor(private service:ServiceService, private router: Router, private route: ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.data = params.get('id');
    });
  }

  ngOnInit(): void {
    console.log(this.data);
    this.service.geteventtypeData(this.data).subscribe(response =>{
      this.eventtypedata =response
      console.log(this.eventtypedata)
      this.eventtype = { 
        eventtypename: this.eventtypedata.eventtypename,
        eventtypedescription: this.eventtypedata.eventtypedescription
       

      };
    });
  }
  submit() {
    const formData = new FormData();
    formData.append('eventtypename',this.eventtype.eventtypename);
    formData.append('eventtypedescription',this.eventtype.eventtypedescription);

    this.service.updateeventtype(this.data,formData).subscribe(
      (response) =>{
        // console.log('data updated:', response);
        alert('data updated successfully')
        this.router.navigate(['adminmaster/eventtypeview']);
      },
      (error) =>{
        console.error('Error updating event type',error);
        alert('Error upadting event type');

      }

    )


  }

}

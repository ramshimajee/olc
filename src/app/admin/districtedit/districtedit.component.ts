import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-districtedit',
  templateUrl: './districtedit.component.html',
  styleUrls: ['./districtedit.component.scss']
})
export class DistricteditComponent implements OnInit {
  district={
    stateid:'',
    districtname:''
    
    
  }  
  state: any[]=[];
  data: any;
  districtdata: any;
  
  
  constructor(private service:ServiceService,private router: Router, private route:ActivatedRoute,private http:HttpClient){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.data = params.get('id');
    });
  

  }

  ngOnInit(): void {
    this.getStateData();
    console.log(this.data);
    this.service.getdistrictData(this.data).subscribe(response=>{
      this.districtdata=response
      // console.log(this.districtdata.state.stateid)
      this.district={
        stateid:this.districtdata.state.stateid ,
        districtname:this.districtdata.districtname
      };  
    });

  }
 
  
  getStateData(){
    this.service.getstates().subscribe((response: any)=>{
    this.state = response;
    console.log(this.state)
    });
    

  }

  submit(){
    const formData=new FormData();
    formData.append('stateid',this.district.stateid)
    formData.append('districtname',this.district.districtname)
    console.log(formData) 

  
  this.service.updatedistrict(this.data,formData).subscribe(
    (response) =>{
      console.log('district updated:', response);
      alert('district updated successfully')
      this.router.navigate(['adminmaster/districtview']);
    },
    (error) =>{
      console.error('Error district',error);
      alert('Error upadting district');
    }
  )
  }

}

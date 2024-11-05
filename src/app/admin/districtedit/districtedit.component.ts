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
    countryid:'',
    stateid:'',
    districtname:''
    
    
  }  
  state: any[]=[];
  data: any;
  districtdata: any;
  country: any;
  countryid: any;
  statebycountry: any;
  
  
  constructor(private service:ServiceService,private router: Router, private route:ActivatedRoute,private http:HttpClient){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.data = params.get('id');
    });
  

  }

  ngOnInit(): void {
    this.getStateData();
    this.getCountryData();
    console.log(this.data);
    this.service.getdistrictData(this.data).subscribe(response=>{
      this.districtdata=response
      // console.log(this.districtdata.state.stateid)
      this.district={
        countryid:this.districtdata.country.countryid ,
        stateid:this.districtdata.state.stateid ,
        districtname:this.districtdata.districtname
      };  
    });

  }
  getCountryData(){
    this.service.getcountry().subscribe((response: any)=>{
    this.country = response;
    console.log(this.state)
    });
    

  }
  
  getStateData(){
    this.service.getstates().subscribe((response: any)=>{
    this.state = response;
    console.log(this.state)
    });
    

  }
  DropdownChange(event: any) {
    this.countryid=this.district.countryid;
    console.log(this.countryid)
    this.service.getstatebycountry(this.countryid).subscribe(response =>{
    this.statebycountry =response
    console.log(this.statebycountry)
    
    });
  }

 

  submit(){
    const formData=new FormData();
    formData.append('countryid',this.district.countryid)
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

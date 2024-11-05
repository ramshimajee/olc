import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-stateedit',
  templateUrl: './stateedit.component.html',
  styleUrls: ['./stateedit.component.scss']
})
export class StateeditComponent implements OnInit {
  state={
    countryid:'',
    statename:''
    
    
  }  
  data: any;
  statedata: any;
  country: any[]=[];
  
  
  constructor(private service:ServiceService,private router: Router, private route:ActivatedRoute,private http:HttpClient){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.data = params.get('id');
    });
  

  }

  ngOnInit(): void {
    this.getCountryData();
    console.log(this.data);
    this.service.getstateData(this.data).subscribe(response=>{
      this.statedata=response
      console.log(this.statedata)
      // console.log(this.districtdata.state.stateid)
      this.state={
        countryid:this.statedata.country.countryid ,
        statename:this.statedata.statename
      };  
    });

  }
 
  
  getCountryData(){
    this.service.getcountry().subscribe((response: any)=>{
    this.country = response;
    console.log(this.country)
    });
    

  }

  submit(){
    const formData=new FormData();
    formData.append('countryid',this.state.countryid)
    formData.append('statename',this.state.statename)
    console.log(formData) 

  
  this.service.updatestate(this.data,formData).subscribe(
    (response) =>{
      console.log('state updated:', response);
      alert('state updated successfully')
      this.router.navigate(['adminmaster/stateview']);
    },
    (error) =>{
      console.error('Error state',error);
      alert('Error upadting state');
    }
  )
  }


}

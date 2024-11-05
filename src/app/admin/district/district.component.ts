import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';




@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  district={
    countryid:'',
    stateid:'',
    districtname:''
    
    
  }  
  state: any[]=[];
  country: any;
  countryid: any;
  statebycountry: any;
  
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
    
    this.getCountryData()

  }
  getCountryData(){
    this.service.getcountry().subscribe((response: any)=>{
    this.country = response;
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
    this.service.district(formData).subscribe((response)=>{
      console.log(response);
      alert('District added');
      this.router.navigate(['adminmaster/districtview'])
    },);


  }

}

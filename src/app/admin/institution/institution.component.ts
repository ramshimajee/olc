import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  institution={
    institutionname:'',
    institutionlink:'',
    countryid:'',
    stateid:'',
    districtid:''
  }   
  country: any;
  countryid: any;
  state: any;
  stateid: any;
  district: any;
  
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
    this.getCountry();
  }


  submit(){
    const formData=new FormData();
    formData.append('institutionname',this.institution.institutionname)
    formData.append('institutionlink',this.institution.institutionlink)
    formData.append('districtid',this.institution.districtid)
    formData.append('stateid',this.institution.stateid)
    formData.append('countryid',this.institution.countryid)
    console.log(formData)
    this.service.institution(formData).subscribe((response)=>{
      console.log(response);
      alert('Institution added');
      this.router.navigate(['adminmaster/institutionview'])
    },);


  }

  getCountry(){
    this.service.getcountry().subscribe((response:any)=>{
      this.country = response
      console.log(this.country)
    })
  }
  DropdownChangeState (event: any) {
    this.countryid = this.institution.countryid
    this.service.getstatebycountry(this.countryid).subscribe((response:any)=>{
      this.state = response
    })
  }
  
  DropdownChangeDistrict (event:any){
    this.stateid=this.institution.stateid;
    console.log(this.stateid)
    this.service.getdistrictbyid(this.stateid).subscribe(response =>{
    this.district = response
    console.log(this.district)
    
    });
  }

}

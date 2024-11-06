import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup={
    countryid:'',
    stateid:'',
    districtid:'',
    institution:'',
    libraryname:'',
    registereddate:'',
    email:'',
    password:'',
   
};
  
  state: any[]=[];
  stateid: any;                               
  district: any;
  affiliation: any;
  signupdata: any;
  membershipname: any;
  memberid: any;
  institution: any;
  country: any[]=[];
  countryid: any;
  districtid: any;
 
  constructor(private service:ServiceService,private router: Router,private route: ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.signupdata = params.get('id');
    });
  }
ngOnInit(): void {
  this.getCountryData();
  
  this.getMembershipName();
}
getCountryData(){
  this.service.getcountry().subscribe((response: any)=>{
  this.country = response;
  console.log(this.country)
  });
  

}

DropdownChangeState (event: any) {
  this.countryid = this.signup.countryid
  this.service.getstatebycountry(this.countryid).subscribe((response:any)=>{
    this.state = response
  })
}

DropdownChangeDistrict (event:any){
  this.stateid=this.signup.stateid;
  console.log(this.stateid)
  this.service.getdistrictbyid(this.stateid).subscribe(response =>{
  this.district = response
  console.log(this.district)
  
  });
}
DropDownChangeInstitute(event:any){
  this.districtid = this.signup.districtid
  this.service.getinstitutionbyDistrict(this.districtid).subscribe((response:any)=>{
    this.institution = response
  })
}


getMembershipName(){
  this.service.getmembershiptypeData(this.signupdata).subscribe((response:any)=>{
    console.log(response.membershiptypename)
    this.membershipname = response.membershiptypename
  })
}


submit(){
  const formData=new FormData();
  formData.append('countryid',this.signup.countryid)
  formData.append('stateid',this.signup.stateid)
  formData.append('districtid',this.signup.districtid)
  formData.append('institution',this.signup.institution)
  formData.append('libraryname',this.signup.libraryname)
  formData.append('registereddate',this.signup.registereddate)
  formData.append('email',this.signup.email)
  formData.append('password',this.signup.password)
  
  
  console.log(formData)
  this.service.signup(formData).subscribe((response)=>{
    console.log(response);
    if (response.success===true){
      alert('Procced To Payment Page');
      this.memberid = response.id
      sessionStorage.setItem('memberID',this.memberid)
      this.router.navigate(['payment',this.signupdata])
    }
    else if (response.success===false){
      alert("User Already Exists")
    }
    else{
      alert("Unknow Error Ocuured")
    }
    
    
  },
  
);

 
}

}








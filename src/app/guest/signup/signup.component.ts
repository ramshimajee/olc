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
    displayname:'',
    stateid:'',
    districtid:'',
    firstname:'',
    lastname:'',
    affiliation:'',
    Linkedln:'',
    biography:'',
    ORCID:'',
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
 
  constructor(private service:ServiceService,private router: Router,private route: ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.signupdata = params.get('id');
    });
  }
ngOnInit(): void {
  this.getStateData();
  this.getAffliationData();
  this.getMembershipName();
}
getStateData(){
  this.service.getstates().subscribe((response: any)=>{
  this.state = response;
  console.log(this.state)
  });
  

}
DropdownChange(event: any) {
  this.stateid=this.signup.stateid;
  console.log(this.stateid)
  this.service.getdistrictbyid(this.stateid).subscribe(response =>{
  this.district =response
  console.log(this.district)
  
  });
}
getAffliationData(){
  this.service.getaffiliates().subscribe((resultData: any)=>
  {
  console.log(resultData);
  this.affiliation = resultData;
  });
  

}

getMembershipName(){
  this.service.getmembershiptypeData(this.signupdata).subscribe((response:any)=>{
    console.log(response.membershiptypename)
    this.membershipname = response.membershiptypename
  })
}


submit(){
  const formData=new FormData();
  formData.append('displayname',this.signup.displayname)
  formData.append('stateid',this.signup.stateid)
  formData.append('districtid',this.signup.districtid)
  formData.append('firstname',this.signup.firstname)
  formData.append('lastname',this.signup.lastname)
  formData.append('affiliation',this.signup.affiliation)
  formData.append('Linkedln',this.signup.Linkedln)
  formData.append('biography',this.signup.biography)
  formData.append('ORCID',this.signup.ORCID)
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








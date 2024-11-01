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
 
  constructor(private service:ServiceService,private router: Router,private route: ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.signupdata = params.get('id');
    });
  }
ngOnInit(): void {
  this.getStateData();
  this.getAffliationData();

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

    alert('registration added');
    location.reload();
    // this.router.navigate(['adminmaster/eventsview'])
  },
  error => {
    // Handle the case where the user already exists
    if (error.status === 400 && error.error.message === "User Already Exist!") {
      alert('User Already Exist!');
    } else {
      alert('An error occurred during registration.');
    }
  }
);

 
}

}








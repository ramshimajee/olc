import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-membershiptype',
  templateUrl: './membershiptype.component.html',
  styleUrls: ['./membershiptype.component.scss']
})
export class MembershiptypeComponent implements OnInit {
  membershiptype={
    membershiptypename:'',
    description:'',
   
};
  getMembershiptypeData: any;
  
 
constructor(private service:ServiceService,private router: Router){}

ngOnInit(): void {
    this.getMembershiptypeData();
    
}



submit(){
  const formData=new FormData();
  formData.append('membershiptypename',this.membershiptype.membershiptypename)
  formData.append('description',this.membershiptype.description)
  
  console.log(formData)
  this.service. addmembershiptype(formData).subscribe((response)=>{
    console.log(response);
    alert('membershiptype added');
    
    this.router.navigate(['adminmaster/membershiptypeview'])
  },);

 


}


}

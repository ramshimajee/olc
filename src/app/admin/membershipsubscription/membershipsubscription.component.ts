import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-membershipsubscription',
  templateUrl: './membershipsubscription.component.html',
  styleUrls: ['./membershipsubscription.component.scss']
})
export class MembershipsubscriptionComponent {
  membershipsubscription={
    membershiptype:'',
    duration:'',
    price:'',
    description:''
    
    
  }  
  membershiptype: any[]=[];
  
  
  constructor(private service:ServiceService,private router: Router){}

  ngOnInit(): void {
    this.getMembershipsubscriptionData();

  }
  getMembershipsubscriptionData(){
    this.service.getmembershiptype().subscribe((response: any)=>{
    this.membershiptype = response;
    console.log(this.membershiptype)
    });
    

  }

  submit(){
    const formData=new FormData();
    formData.append('membershiptype',this.membershipsubscription.membershiptype)
    formData.append('duration',this.membershipsubscription.duration)
    formData.append('price',this.membershipsubscription.price)
    formData.append('description',this.membershipsubscription.description)
    
    console.log(formData)
    this.service.addmembershipsubscription(formData).subscribe((response)=>{
      console.log(response);
      alert('membershipsubscription added');
      this.router.navigate(['adminmaster/membershipsubscriptionview'])
    },);


  }


}

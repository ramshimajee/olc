import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-membershipsubscriptionedit',
  templateUrl: './membershipsubscriptionedit.component.html',
  styleUrls: ['./membershipsubscriptionedit.component.scss']
})
export class MembershipsubscriptioneditComponent implements OnInit {
  membershipsubscription={
    membershiptype:'',
    duration:'',
    price:'',
    description:''
    
    
  }  
  data: any;
  membershipsubscriptiondata: any;
  membershiptype: any[]=[];

  
  
  constructor(private service:ServiceService,private router: Router, private route:ActivatedRoute,private http:HttpClient){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.data = params.get('id');
    });
  

  }

  ngOnInit(): void {
    this.getMembershipsubscriptionData();
    console.log(this.data);
    this.service.getmembershipsubscriptionData(this.data).subscribe(response=>{
      this.membershipsubscriptiondata=response
      console.log(this.membershipsubscriptiondata)
      console.log(this.membershipsubscriptiondata[0].membershiptype.id)
      this.membershipsubscription={
        membershiptype:this.membershipsubscriptiondata[0].membershiptype.id ,
        duration:this.membershipsubscriptiondata[0].duration,
        price:this.membershipsubscriptiondata[0].price,
        description:this.membershipsubscriptiondata[0].description
      };  
    });

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

  
  this.service.updatemembershipsubscription(this.data,formData).subscribe(
    (response) =>{
      console.log('membershipsubscription updated:', response);
      alert('membershipsubscription updated successfully')
      this.router.navigate(['adminmaster/membershipsubscriptionview']);
    },
    (error) =>{
      console.error('Error membershipsubscription',error);
      alert('Error upadting membershipsubscription');
    }
  )
  }

}

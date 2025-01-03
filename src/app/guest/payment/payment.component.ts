import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payment={
    holdername:'',
    cardno:'',
    cvc:'',
    expdate:''
  };

  id: any;
  data: any;
  membershipname: any;
  price: any;
  memberid: any;
  email: any;
 
  constructor(private service:ServiceService,private router: Router,private route: ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.id = params.get('id');
    });
  }
ngOnInit(): void {
  
  this.getPaymentData();
  this.memberid=sessionStorage.getItem('memberID')
  this.email = sessionStorage.getItem('email')
}


getPaymentData(){
  this.service.getpayment(this.id).subscribe((response:any)=>{
    console.log(response);
    this.membershipname=response.name
    this.price=response.price
    
   
  },);
}




submit(){
  const formData=new FormData();
  formData.append('holdername',this.payment.holdername)
  formData.append('cardno',this.payment.cardno)
  formData.append('cvc',this.payment.cvc)
  formData.append('expdate',this.payment.expdate)
  formData.append('membershiptype',this.id)
  formData.append('price',this.price)
  formData.append('member',this.memberid)
  
  
  console.log(formData)
  this.service.addpayment(formData).subscribe((response)=>{
    console.log(response);
    this.emailfunction();
    alert('payment successfull');
    
    sessionStorage.clear();
    this.router.navigate([''])
    // this.router.navigate(['adminmaster/institutionview'])
    },);


  }

  emailfunction(){
    console.log(this.email)
    const emailForm = new FormData
    emailForm.append('email',this.email)
    emailForm.append('membershipid',this.id)
    this.service.sendemail(emailForm).subscribe((response:any)=>{

    })
  }

}

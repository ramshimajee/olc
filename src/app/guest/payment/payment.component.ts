import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  id: any;
  data: any;
  membershipname: any;
  price: any;

  constructor(private service:ServiceService,private router: Router,private route: ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.id = params.get('id');
    });
  }
  ngOnInit(): void {
  this.getPaymentData();
  }

  getPaymentData(){
    this.service.getpayment(this.id).subscribe((response:any)=>{
      console.log(response.name);
      this.membershipname=response.name
      this.price=response.price
      
     
    },);
  }




}

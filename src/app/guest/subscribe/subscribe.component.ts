import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  subscribe={
    email:'',
    password:'',
   
   
};
  subscribedata: any;
  

constructor(private service:ServiceService,private router: Router,private route: ActivatedRoute){
  this.route.paramMap.subscribe((params:ParamMap) =>{
    this.subscribedata = params.get('id');
  });
}
ngOnInit(): void {
  

}

submit(){
 
 

 
}
subscription(){
  const formData=new FormData();
  formData.append('email',this.subscribe.email)
  formData.append('password',this.subscribe.password)
  console.log(formData)
  this.service.subscription(formData,this.subscribedata).subscribe((response)=>{
    console.log(response);
    alert('subscription  successfull');
    this.router.navigate(['payment',this.subscribedata])
  },);
  
  console.log(this.subscribedata)

}



}

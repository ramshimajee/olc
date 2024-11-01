import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent  {
//   subscribe={
//     email:'',
//     password:'',
   
   
// };
//   subscribedata: any;
//   id: any;
  

// constructor(private service:ServiceService,private router: Router,private route: ActivatedRoute){
//   this.route.paramMap.subscribe((params:ParamMap) =>{
//     this.subscribedata = params.get('id');
//   });
// }
// ngOnInit(): void {
  

// }

// submit(){
 
 

 
// }
// subscription(){
//   const formData=new FormData();
//   formData.append('email',this.subscribe.email)
//   formData.append('password',this.subscribe.password)
//   console.log(formData)
//   this.service.subscription(formData,this.subscribedata).subscribe((response)=>{
//     console.log(response);
//     if(response.success===true){
//       alert('proceed to payment');
//       this.id=response.id
//       sessionStorage.setItem('id',this.id)
//       this.router.navigate(['payment',this.subscribedata])
//     }
//     else if(response.success===false){
//       alert('subscription can do only after signup');
//       this.router.navigate(['guestmaster/signup'])

//     }
  
//   },);
  
//   console.log(this.subscribedata)

// }



}

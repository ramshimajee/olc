import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-getmembershipsubscription',
  templateUrl: './getmembershipsubscription.component.html',
  styleUrls: ['./getmembershipsubscription.component.scss']
})
export class GetmembershipsubscriptionComponent {
  membershipsubscription: any[]=[];
  

  constructor(private service:ServiceService,private router: Router){}

  ngOnInit(): void {
    this. getMembershipsubscriptionData();
    console.log('hi')
      
  }
  getMembershipsubscriptionData() {
    this.service.getmembershipsubscription().subscribe((response:any)=>
    {
      console.log(response);
      this.membershipsubscription=response;
    });
  }
  subscribe(id:any){
    console.log(id)
    this.router.navigate(['guestmaster/subscribe',id] )
  }

}

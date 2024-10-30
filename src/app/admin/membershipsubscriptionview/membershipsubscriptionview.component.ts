import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-membershipsubscriptionview',
  templateUrl: './membershipsubscriptionview.component.html',
  styleUrls: ['./membershipsubscriptionview.component.scss']
})
export class MembershipsubscriptionviewComponent implements OnInit {
  membershipsubscription: any[]=[];
  

  constructor(private service:ServiceService, private router: Router){}

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
  delete(data:any){
    console.log(data)
    this.service.deletemembershipsubscription(data).subscribe(
      (response: any)=>{
        console.log(response);
        alert("data deleted")
        location.reload();

      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/membershipsubscriptionedit',id] )
  }


}

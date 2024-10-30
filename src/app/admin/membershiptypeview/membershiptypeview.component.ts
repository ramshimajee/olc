import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-membershiptypeview',
  templateUrl: './membershiptypeview.component.html',
  styleUrls: ['./membershiptypeview.component.scss']
})
export class MembershiptypeviewComponent implements OnInit {
  membershiptype:any[]=[];
  
  
  constructor(private service:ServiceService, private router: Router){}

  ngOnInit(): void {
    this. getMembershiptypeData();
  
      
  }
  getMembershiptypeData() {
    this.service.getmembershiptype().subscribe((response:any)=>
    {
      console.log(response);
      this.membershiptype=response;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deletemembershiptype(data).subscribe(
      (response: any)=>{
        console.log(response);
        alert("data deleted")
        location.reload();

      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/membershiptypeedit',id] )
  }


}

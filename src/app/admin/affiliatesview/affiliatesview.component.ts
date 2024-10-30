import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-affiliatesview',
  templateUrl: './affiliatesview.component.html',
  styleUrls: ['./affiliatesview.component.scss']
})
export class AffiliatesviewComponent implements OnInit {
  affiliatesdata:any[]=[];
  
  
  constructor(private service:ServiceService, private router:Router){
  }

  ngOnInit(): void {
      this.getAffiliatesData();
      // console.log('hi')
  }
  getAffiliatesData(){
    this.service.getaffiliates().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.affiliatesdata=resultData;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deleteaffiliates(data).subscribe(
      (response)=>{
        console.log(response);
        alert("data deleted")
        location.reload();
      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/affiliatesedit',id] )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-districtview',
  templateUrl: './districtview.component.html',
  styleUrls: ['./districtview.component.scss']
})
export class DistrictviewComponent implements OnInit {
  state: any[]=[];

  constructor(private service:ServiceService, private router: Router){}

  ngOnInit(): void {
    this.getDistrictData();
    console.log('hi')
      
  }
  getDistrictData() {
    this.service.getdistrict().subscribe((response:any)=>
    {
      console.log(response);
      this.state=response;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deletedistrict(data).subscribe(
      (response: any)=>{
        console.log(response);
        alert("data deleted")
        location.reload();

      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/districtedit',id] )
  }



}

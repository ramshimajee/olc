import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-annualreportview',
  templateUrl: './annualreportview.component.html',
  styleUrls: ['./annualreportview.component.scss']
})
export class AnnualreportviewComponent implements OnInit {
  annualdata: any[]=[];
 
  
  constructor(private service:ServiceService, private router:Router){
  }

  ngOnInit(): void {
      this.getAnnualData();
      // console.log('hi')
  }
  getAnnualData(){
    this.service.getannualreport().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.annualdata=resultData;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deleteannualreport(data).subscribe(
      (response)=>{
        console.log(response);
        alert("data deleted")
        location.reload();
      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/annualreportedit',id] )
  }

}

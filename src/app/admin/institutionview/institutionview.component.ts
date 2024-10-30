import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-institutionview',
  templateUrl: './institutionview.component.html',
  styleUrls: ['./institutionview.component.scss']
})
export class InstitutionviewComponent implements OnInit {
  institution: any[]=[];
 

  constructor(private service:ServiceService, private router: Router){}

  ngOnInit(): void {
    this. getInstitutionData();
  
      
  }
  getInstitutionData() {
    this.service.getinstitution().subscribe((response:any)=>
    {
      console.log(response);
      this.institution=response;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deleteinstitution(data).subscribe(
      (response: any)=>{
        console.log(response);
        alert("data deleted")
        location.reload();

      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/institutionedit',id] )
  }



}

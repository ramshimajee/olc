import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-getinstitution',
  templateUrl: './getinstitution.component.html',
  styleUrls: ['./getinstitution.component.scss']
})
export class GetinstitutionComponent implements OnInit {
  institution: any[]=[];
 

  constructor(private service:ServiceService){}

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

}

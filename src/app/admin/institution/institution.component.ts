import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  institution={
    institutionname:'',
    institutionlink:''
  }   
  
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {}


  submit(){
    const formData=new FormData();
    formData.append('institutionname',this.institution.institutionname)
    formData.append('institutionlink',this.institution.institutionlink)
    
    console.log(formData)
    this.service.institution(formData).subscribe((response)=>{
      console.log(response);
      alert('Institution added');
      this.router.navigate(['adminmaster/institutionview'])
    },);


  }

}

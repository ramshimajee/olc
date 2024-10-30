import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';




@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  district={
    stateid:'',
    districtname:''
    
    
  }  
  state: any[]=[];
  
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
    this.getStateData();

  }
  getStateData(){
    this.service.getstates().subscribe((response: any)=>{
    this.state = response;
    console.log(this.state)
    });
    

  }

  submit(){
    const formData=new FormData();
    formData.append('stateid',this.district.stateid)
    formData.append('districtname',this.district.districtname)
    
    console.log(formData)
    this.service.district(formData).subscribe((response)=>{
      console.log(response);
      alert('District added');
      this.router.navigate(['adminmaster/districtview'])
    },);


  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit{
  state={
    countryid:'',
    statename:''
    
    
  }  
  
  country: any[]=[];
  
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
    this.getCountryData();

  }
  getCountryData(){
    this.service.getcountry().subscribe((response: any)=>{
    this.country = response;
    console.log(this.state)
    });
    

  }

  submit(){
    const formData=new FormData();
    formData.append('countryid',this.state.countryid)
    formData.append('statename',this.state.statename)
    
    console.log(formData)
    this.service.state(formData).subscribe((response)=>{
      console.log(response);
      alert('State added');
      location.reload();
      // this.router.navigate(['adminmaster/districtview'])
    },);


  }

}

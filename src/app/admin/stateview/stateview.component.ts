import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-stateview',
  templateUrl: './stateview.component.html',
  styleUrls: ['./stateview.component.scss']
})
export class StateviewComponent implements OnInit {

  country: any[]=[];

  constructor(private service:ServiceService, private router: Router){}

  ngOnInit(): void {
    this.getStateData();
      
  }
  getStateData() {
    this.service.getstates().subscribe((response:any)=>
    {
      console.log(response);
      this.country=response;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deletestate(data).subscribe(
      (response: any)=>{
        console.log(response);
        alert("data deleted")
        location.reload();

      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/stateedit',id] )
  }



}

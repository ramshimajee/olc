import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-bylawviews',
  templateUrl: './bylawviews.component.html',
  styleUrls: ['./bylawviews.component.scss']
})
export class BylawviewsComponent implements OnInit {
  bylawdata: any[]=[];
  
  constructor(private service:ServiceService,private router: Router){
  }

  ngOnInit(): void {
      this.getLawData();
      // console.log('hi')
  }
  getLawData(){
    this.service.getbylaw().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.bylawdata=resultData;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deletebylaw(data).subscribe(
      (response)=>{
        console.log(response);
        alert("data deleted")
        location.reload();
      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/bylawsedit',id] )
  }

}

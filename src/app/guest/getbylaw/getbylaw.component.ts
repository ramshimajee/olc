import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-getbylaw',
  templateUrl: './getbylaw.component.html',
  styleUrls: ['./getbylaw.component.scss']
})
export class GetbylawComponent implements OnInit {
  bylawdata: any[]=[];
  
  constructor(private service:ServiceService){
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

}

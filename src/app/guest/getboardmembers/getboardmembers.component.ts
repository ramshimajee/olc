import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-getboardmembers',
  templateUrl: './getboardmembers.component.html',
  styleUrls: ['./getboardmembers.component.scss']
})
export class GetboardmembersComponent implements OnInit {
  boarddata: any[]=[];

  constructor(private service:ServiceService){
  }

  ngOnInit(): void {
      this.getBoardData();
     
  }
  getBoardData(){
    this.service. getmember().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.boarddata=resultData;
    });
  }

}

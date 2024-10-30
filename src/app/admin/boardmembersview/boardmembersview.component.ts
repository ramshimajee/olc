import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-boardmembersview',
  templateUrl: './boardmembersview.component.html',
  styleUrls: ['./boardmembersview.component.scss']
})
export class BoardmembersviewComponent implements OnInit {
  boarddata: any[]=[];

  constructor(private service:ServiceService,private router: Router){
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
  delete(data:any){
    console.log(data)
    this.service.deletemember(data).subscribe(
      (response)=>{
        console.log(response);
        alert("data deleted")
        location.reload();
      });
  }
  edit(id:any){
    this.router.navigate(['adminmaster/boardmembersedit',id] )
  }

}

  
  



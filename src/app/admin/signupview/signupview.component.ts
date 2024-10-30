import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-signupview',
  templateUrl: './signupview.component.html',
  styleUrls: ['./signupview.component.scss']
})
export class SignupviewComponent implements OnInit{
  signupdata: any[]=[];
  

  constructor(private service:ServiceService){
  }

  ngOnInit(): void {
      this.getSignupData();
     
  }
  getSignupData(){
    this.service.getsignup().subscribe((resultData:any)=>
    {
      console.log(resultData);
      this.signupdata=resultData;
    });
  }
  delete(data:any){
    console.log(data)
    this.service.deletesignup(data).subscribe(
      (response)=>{
        console.log(response);
        alert("data deleted")
        location.reload();
      });
  }
  
  // edit(id:any){
  //   this.router.navigate(['adminmaster/eventsedit',id] )
  // }

}

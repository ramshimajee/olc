import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-bylaws',
  templateUrl: './bylaws.component.html',
  styleUrls: ['./bylaws.component.scss']
})
export class BylawsComponent  implements OnInit {
  
  bylaw={
    description:'',
    image:null as File | null 
};
  getLawData: any;
constructor(private service:ServiceService, private router: Router){}

ngOnInit(): void {
    this.getLawData();
    
}
onFileSelected(event: any) {
  this.bylaw.image = event.target.files[0];
  console.log(this.bylaw.image);
}
submit(){
  const formData=new FormData();
  formData.append('description',this.bylaw.description)
  if (this.bylaw.image){
    formData.append('image',this.bylaw.image)
  }
  console.log(formData)
  this.service.addbylaw(formData).subscribe((response)=>{
    console.log(response);
    alert('law added');
    this.router.navigate(['adminmaster/bylawsview'])
  },);

 0


}


}

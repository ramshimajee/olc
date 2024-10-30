import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.scss']
})
export class AffiliatesComponent implements OnInit {
  affiliates={
    affiliatesname:'',
    affiliateslink:'',
    image:null as File | null 
};
  getAffiliatesData: any;
  
constructor(private service:ServiceService, private router: Router){}

ngOnInit(): void {
    this.getAffiliatesData();
    
}

onFileSelected(event: any) {
  this.affiliates.image = event.target.files[0];
  console.log(this.affiliates.image);
}
submit(){
  const formData=new FormData();
  formData.append('affiliatesname',this.affiliates.affiliatesname)
  formData.append('affiliateslink',this.affiliates.affiliateslink)
  if (this.affiliates.image){
    formData.append('image',this.affiliates.image)
  }
  console.log(formData)
  this.service.affiliates(formData).subscribe((response)=>{
    console.log(response);
    alert('affiliates added');
    this.router.navigate(['adminmaster/affiliatesview'])
  },);

 0


}


}

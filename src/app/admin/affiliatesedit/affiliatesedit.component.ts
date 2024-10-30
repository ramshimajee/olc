import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-affiliatesedit',
  templateUrl: './affiliatesedit.component.html',
  styleUrls: ['./affiliatesedit.component.scss']
})
export class AffiliateseditComponent implements OnInit {
  affiliates={
    affiliatesname:'',
    affiliateslink:'',
    image:null as File | null 
};
  
  
  image: any;
  affliatesdata: any;
  afflidata: any;
constructor(private service:ServiceService, private router:Router, private route:ActivatedRoute,private http:HttpClient){
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.affliatesdata = params.get('id');
  });

}
ngOnInit(): void {
  console.log(this.affliatesdata);
  this.service.getaffiliatesData(this.affliatesdata).subscribe(response=>{
    this.afflidata = response
    this.image=this.afflidata.image
    console.log(this.image)
    // console.log(this.bylawdata)
    this.affiliates={
      affiliatesname:this.afflidata.affiliatesname,
      affiliateslink:this.afflidata.affiliateslink,
      image:this.afflidata.image

    };
  });

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
  

  this.service.updateaffiliates(this.affliatesdata,formData).subscribe(
    (response) =>{
      console.log('affiliates updated:', response);
      alert('affiliates updated successfully')
      this.router.navigate(['adminmaster/affiliatesview']);
    },
    (error) =>{
      console.error('Error affiliates',error);
      alert('Error upadting affiliates');
    }
  )

}
}
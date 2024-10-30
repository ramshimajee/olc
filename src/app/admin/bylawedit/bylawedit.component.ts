import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-bylawedit',
  templateUrl: './bylawedit.component.html',
  styleUrls: ['./bylawedit.component.scss']
})
export class BylaweditComponent implements OnInit {
  bylaw={
    description:'',
    image:null as File | null 
};
  data: any;
  bylawdata: any;
  image: any;
constructor(private service:ServiceService, private router:Router, private route:ActivatedRoute,private http:HttpClient){
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.data = params.get('id');
  });

}
ngOnInit(): void {
  console.log(this.data);
  this.service.getbylawData(this.data).subscribe(response=>{
    this.bylawdata = response
    this.image=this.bylawdata.image
    console.log(this.image)
    // console.log(this.bylawdata)
    this.bylaw={
      description:this.bylawdata.description,
      image:this.bylawdata.image

    };
  });

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
  

  this.service.updatebylaw(this.data,formData).subscribe(
    (response) =>{
      console.log('bylaw updated:', response);
      alert('bylaw updated successfully')
      this.router.navigate(['adminmaster/bylawsview']);
    },
    (error) =>{
      console.error('Error bylaw',error);
      alert('Error upadting bylaw');
    }
  )
  }
}

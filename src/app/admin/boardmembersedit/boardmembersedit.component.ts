import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-boardmembersedit',
  templateUrl: './boardmembersedit.component.html',
  styleUrls: ['./boardmembersedit.component.scss']
})
export class BoardmemberseditComponent implements OnInit{
  board={
    firstname:'',
    lastname:'',
    designation:'',
    affliation:'',
    duration_from:'',
    duration_to:'',
    twitter:'',
    ORCID:'',
    image:null as File | null 
};
  data: any;
  image: any;
  boarddata: any;
 
constructor(private service:ServiceService, private router:Router, private route:ActivatedRoute,private http:HttpClient){
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.data = params.get('id');
  });

}
ngOnInit(): void {
  console.log(this.data);
  this.service.getmemberData(this.data).subscribe(response=>{
    this.boarddata = response
    this.image=this.boarddata.image
    console.log(this.image)
    this.board={
      firstname:this.boarddata.firstname,
      lastname:this.boarddata.lastname,
      designation:this.boarddata.designation,
      affliation:this.boarddata.affliation,
      duration_from:this.boarddata.duration_from,
      duration_to:this.boarddata.duration_to,
      twitter:this.boarddata.twitter,
      ORCID:this.boarddata.ORCID,
      image:this.boarddata.image

    };
  });

}
onFileSelected(event: any) {
  this.board.image = event.target.files[0];
  console.log(this.board.image);
}

submit(){
  const formData=new FormData();
  formData.append('firstname',this.board.firstname)
  formData.append('lastname',this.board.lastname)
  formData.append('designation',this.board.designation)
  formData.append('affliation',this.board.affliation)
  formData.append('duration_from',this.board.duration_from)
  formData.append('duration_to',this.board.duration_to)
  formData.append('twitter',this.board.twitter)
  formData.append('ORCID',this.board.ORCID)
  if (this.board.image){
    formData.append('image',this.board.image)
  }
  

  this.service.updatemember(this.data,formData).subscribe(
    (response) =>{
      console.log('member updated:', response);
      alert('member updated successfully')
      this.router.navigate(['adminmaster/boardmembersview']);
    },
    (error) =>{
      console.error('Error member',error);
      alert('Error upadting member');
    }
  )
  }

}

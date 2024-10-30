import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-boardmembers',
  templateUrl: './boardmembers.component.html',
  styleUrls: ['./boardmembers.component.scss']
})
export class BoardmembersComponent implements OnInit {
   
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
  getBoardData: any;
 
constructor(private service:ServiceService,private router: Router){}

ngOnInit(): void {
    this.getBoardData();
    
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
  console.log(formData)
  this.service.addmember(formData).subscribe((response)=>{
    console.log(response);
    alert('member added');
    this.router.navigate(['adminmaster/boardmembersview'])
  },);

 0


}


}

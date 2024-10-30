import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-membershiptypeedit',
  templateUrl: './membershiptypeedit.component.html',
  styleUrls: ['./membershiptypeedit.component.scss']
})
export class MembershiptypeeditComponent implements OnInit {
  membershiptype={
    membershiptypename:'',
    description:''  
  } 
  
  
  
  
  data: any;
  typedata: any;
  constructor(private service:ServiceService, private router: Router, private route: ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.data = params.get('id');
    });
  }

  ngOnInit(): void {
    console.log(this.data);
    this.service.getmembershiptypeData(this.data).subscribe(response =>{
      this.typedata =response
      console.log(this.typedata)
      this.membershiptype = { 
        membershiptypename: this.typedata.membershiptypename,
        description: this.typedata.description
       

      };
    });
  }
  submit() {
    const formData = new FormData();
    formData.append('membershiptypename',this.membershiptype.membershiptypename);
    formData.append('description',this.membershiptype.description);

    this.service.updatemembershiptype(this.data,formData).subscribe(
      (response) =>{
        // console.log('data updated:', response);
        alert('data updated successfully')
        this.router.navigate(['adminmaster/membershiptypeview']);
      },
      (error) =>{
        console.error('Error updating membership type',error);
        alert('Error upadting membership type');

      }

    )


  }

}

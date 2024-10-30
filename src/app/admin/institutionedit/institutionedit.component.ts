import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-institutionedit',
  templateUrl: './institutionedit.component.html',
  styleUrls: ['./institutionedit.component.scss']
})
export class InstitutioneditComponent implements OnInit {
  institution={
    institutionname:'',
    institutionlink:''  
  } 
  
  
  institutedata: any;
  instdata: any;
  constructor(private service:ServiceService, private router: Router, private route: ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.institutedata = params.get('id');
    });
  }

  ngOnInit(): void {
    console.log(this.institutedata);
    this.service.getinstitutionData(this.institutedata).subscribe(response =>{
      this.instdata =response
      console.log(this.instdata)
      this.institution = { 
        institutionname: this.instdata.institutionname,
        institutionlink: this.instdata.institutionlink
       

      };
    });
  }
  submit() {
    const formData = new FormData();
    formData.append('institutionname',this.institution.institutionname);
    formData.append('institutionlink',this.institution.institutionlink);

    this.service.updateinstitution(this.institutedata,formData).subscribe(
      (response) =>{
        // console.log('data updated:', response);
        alert('data updated successfully')
        this.router.navigate(['adminmaster/institutionview']);
      },
      (error) =>{
        console.error('Error updating institution',error);
        alert('Error upadting institution');

      }

    )


  }

}

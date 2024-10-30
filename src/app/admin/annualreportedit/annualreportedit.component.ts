import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-annualreportedit',
  templateUrl: './annualreportedit.component.html',
  styleUrls: ['./annualreportedit.component.scss']
})
export class AnnualreporteditComponent implements OnInit {
  annualreport={
    annualdescription:'',
    annualbrochure:null as File | null 
};
  data: any;
  annualdata: any;
  annualbrochure: any;
  
constructor(private service:ServiceService, private router:Router, private route:ActivatedRoute,private http:HttpClient){
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.data = params.get('id');
  });

}
ngOnInit(): void {
  console.log(this.data);
  this.service.getannualreportData(this.data).subscribe(response=>{
    this.annualdata = response
    this.annualbrochure=this.annualdata.annualbrochure
    console.log(this.annualbrochure)
    // console.log(this.bylawdata)
    this.annualreport={
      annualdescription:this.annualdata.annualdescription,
      annualbrochure:this.annualdata.annualbrochure

    };
  });

}
onFileSelected(event: any) {
  this.annualreport.annualbrochure = event.target.files[0];
  console.log(this.annualreport.annualbrochure);
}

submit(){
  const formData=new FormData();
  formData.append('annualdescription',this.annualreport.annualdescription)
  if (this.annualreport.annualbrochure){
    formData.append('annualbrochure',this.annualreport.annualbrochure)
  }
  

  this.service.updateannualreport(this.data,formData).subscribe(
    (response) =>{
      console.log('annual report updated:', response);
      alert('annual report updated successfully')
      this.router.navigate(['adminmaster/annualreportview']);
    },
    (error) =>{
      console.error('Error annual report',error);
      alert('Error upadting annual report');
    }
  )
  }

}

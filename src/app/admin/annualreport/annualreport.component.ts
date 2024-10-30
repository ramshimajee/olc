import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-annualreport',
  templateUrl: './annualreport.component.html',
  styleUrls: ['./annualreport.component.scss']
})
export class AnnualreportComponent implements OnInit{
  annualreport={
    annualdescription:'',
    annualbrochure:null as File | null 
};
  getAnnualData: any;

  
constructor(private service:ServiceService, private router: Router){}

ngOnInit(): void {
    this.getAnnualData();
    
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
  console.log(formData)
  this.service.annualreport(formData).subscribe((response)=>{
    console.log(response);
    alert('annual report added');
    this.router.navigate(['adminmaster/annualreportview'])
  },);

 0


}


}

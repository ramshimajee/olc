import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-institutionedit',
  templateUrl: './institutionedit.component.html',
  styleUrls: ['./institutionedit.component.scss']
})
export class InstitutioneditComponent implements OnInit {
  institution = {
    institutionname: '',
    institutionlink: '',
    countryid: '',
    stateid: '',
    districtid: ''
  };

  institutedata: any;
  instdata: any;
  country: any;
  state: any;
  statebycountry: any;
  district: any;
  districtbystate: any;

  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.institutedata = params.get('id');
    });
  }

  ngOnInit(): void {
    this.loadInstitutionData();
    this.getCountry();
  }

  loadInstitutionData() {
    console.log('Fetching data for institution ID:', this.institutedata);
    this.service.getinstitutionData(this.institutedata).subscribe(response => {
      this.instdata = response;
      console.log(this.instdata)
      this.institution = { 
        institutionname: this.instdata.institutionname,
        institutionlink: this.instdata.institutionlink,
        countryid: this.instdata.countrys.countryid,
        stateid: this.instdata.state.stateid,
        districtid: this.instdata.districts.districtid
      };
      this.getState();
      this.getDistrict(); // Get states based on the country of the institution
    });
  }

  submit() {
    if (!this.institution.institutionname || !this.institution.institutionlink) {
      alert('Please fill in all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('institutionname', this.institution.institutionname);
    formData.append('institutionlink', this.institution.institutionlink);
    formData.append('countryid',this.institution.countryid);
    formData.append('stateid',this.institution.stateid);
    formData.append('districtid',this.institution.districtid);

    this.service.updateinstitution(this.institutedata, formData).subscribe(
      response => {
        alert('Data updated successfully');
        this.router.navigate(['adminmaster/institutionview']);
      },
      error => {
        console.error('Error updating institution', error);
        alert('Error updating institution, please try again later');
      }
    );
  }

  getCountry() {
    this.service.getcountry().subscribe((response: any) => {
      this.country = response;
      console.log('Fetched countries:', this.country);
    });
  }

  getState() {
    if (this.institution.countryid) {
      // Convert countryid to number
      const countryIdNumber = Number(this.institution.countryid);
      this.service.getstatebycountry(countryIdNumber).subscribe((response: any) => {
        this.statebycountry = response;
        console.log('Fetched states for country:', this.statebycountry);
      });
    }
  }

  getDistrict() {
    console.log("HI")
    if (this.institution.stateid) {
      // Convert stateid to number
      const stateIdNumber = Number(this.institution.stateid);
      this.service.getdistrictbyid(stateIdNumber).subscribe((response: any) => {
        this.districtbystate = response;
        console.log('Fetched districts for state:', this.districtbystate);
      });
    }
  }

  DropdownChangeState(event: any) {
    this.getState(); // Simplified method to call getState based on countryid
  }

  DropdownChangeDistrict(event: any) {
    this.getDistrict(); // Simplified method to call getDistrict based on stateid
  }
}

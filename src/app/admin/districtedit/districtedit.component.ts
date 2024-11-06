import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-districtedit',
  templateUrl: './districtedit.component.html',
  styleUrls: ['./districtedit.component.scss']
})
export class DistricteditComponent implements OnInit {
  district = {
    countryid: '',
    stateid: '',
    districtname: ''
  };
  state: any[] = [];
  data: any;
  districtdata: any;
  country: any;
  countryid: any;
  statebycountry: any;
  countryidbydata: any;

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    // Fetch the district id from route params
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.data = params.get('id');
    });
  }

  ngOnInit(): void {
    // Load country and state data on component initialization
    this.getCountryData();
    console.log('District ID:', this.data);

    // Fetch district data by the id from the route
    this.service.getdistrictData(this.data).subscribe((response: any) => {
      this.districtdata = response;
      console.log('Fetched district data:', this.districtdata);

      this.district = {
        countryid: this.districtdata.country.countryid,
        stateid: this.districtdata.state.stateid,
        districtname: this.districtdata.districtname
      };

      // Fetch states by the country retrieved from district data
      this.countryidbydata = this.district.countryid;
      this.getStateData();
    });
  }

  // Get country data for dropdown
  getCountryData(): void {
    this.service.getcountry().subscribe((response: any) => {
      this.country = response;
      console.log('Available countries:', this.country);
    });
  }

  // Get states by country id
  getStateData(): void {
    if (this.countryidbydata) {
      this.service.getstatebycountry(this.countryidbydata).subscribe((response: any) => {
        this.state = response;
        console.log('States for selected country:', this.state);
      });
    }
  }

  // Handle change in country dropdown and fetch states accordingly
  DropdownChange(event: any): void {
    this.countryid = this.district.countryid;
    console.log('Selected country ID:', this.countryid);
    this.service.getstatebycountry(this.countryid).subscribe((response:any) => {
      this.state = response;
      console.log('States for country:', this.statebycountry);
    });
  }

  // Form submit logic
  submit(): void {
    if (!this.district.countryid || !this.district.stateid || !this.district.districtname) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('countryid', this.district.countryid);
    formData.append('stateid', this.district.stateid);
    formData.append('districtname', this.district.districtname);
    console.log('Form data to submit:', formData);

    this.service.updatedistrict(this.data, formData).subscribe(
      (response) => {
        console.log('District updated:', response);
        alert('District updated successfully');
        this.router.navigate(['adminmaster/districtview']);
      },
      (error) => {
        console.error('Error updating district:', error);
        alert('Error updating district');
      }
    );
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { DistrictComponent } from './admin/district/district.component';
import { DistrictviewComponent } from './admin/districtview/districtview.component';
import { DistricteditComponent } from './admin/districtedit/districtedit.component';
import { BylawsComponent } from './admin/bylaws/bylaws.component';
import { BylawviewsComponent } from './admin/bylawviews/bylawviews.component';
import { BylaweditComponent } from './admin/bylawedit/bylawedit.component';
import { BoardmembersComponent } from './admin/boardmembers/boardmembers.component';
import { BoardmembersviewComponent } from './admin/boardmembersview/boardmembersview.component';
import { BoardmemberseditComponent } from './admin/boardmembersedit/boardmembersedit.component';
import { InstitutionComponent } from './admin/institution/institution.component';
import { InstitutionviewComponent } from './admin/institutionview/institutionview.component';
import { InstitutioneditComponent } from './admin/institutionedit/institutionedit.component';
import { AffiliatesComponent } from './admin/affiliates/affiliates.component';
import { AffiliatesviewComponent } from './admin/affiliatesview/affiliatesview.component';
import { AffiliateseditComponent } from './admin/affiliatesedit/affiliatesedit.component';
import { EventsComponent } from './admin/events/events.component';
import { EventsviewComponent } from './admin/eventsview/eventsview.component';
import { EventseditComponent } from './admin/eventsedit/eventsedit.component';
import { AnnualreportComponent } from './admin/annualreport/annualreport.component';
import { AnnualreportviewComponent } from './admin/annualreportview/annualreportview.component';
import { AnnualreporteditComponent } from './admin/annualreportedit/annualreportedit.component';
import { SignupComponent } from './guest/signup/signup.component';
import { SignupviewComponent } from './admin/signupview/signupview.component';
// import { SubscribeComponent } from './guest/subscribe/subscribe.component';
import { MembershiptypeComponent } from './admin/membershiptype/membershiptype.component';
import { MembershiptypeviewComponent } from './admin/membershiptypeview/membershiptypeview.component';
import { MembershiptypeeditComponent } from './admin/membershiptypeedit/membershiptypeedit.component';
import { MembershipsubscriptionComponent } from './admin/membershipsubscription/membershipsubscription.component';
import { MembershipsubscriptionviewComponent } from './admin/membershipsubscriptionview/membershipsubscriptionview.component';
import { MembershipsubscriptioneditComponent } from './admin/membershipsubscriptionedit/membershipsubscriptionedit.component';
import { GetboardmembersComponent } from './guest/getboardmembers/getboardmembers.component';
import { GetaffiliatesComponent } from './guest/getaffiliates/getaffiliates.component';
import { CodeofConductComponent } from './guest/codeof-conduct/codeof-conduct.component';
import { GetbylawComponent } from './guest/getbylaw/getbylaw.component';
import { WhyjoinComponent } from './guest/whyjoin/whyjoin.component';
import { GetmembershipsubscriptionComponent } from './guest/getmembershipsubscription/getmembershipsubscription.component';
import { AboutComponent } from './guest/about/about.component';
import { GetinstitutionComponent } from './guest/getinstitution/getinstitution.component';
import { EventtypeComponent } from './admin/eventtype/eventtype.component';
import { EventtypeviewComponent } from './admin/eventtypeview/eventtypeview.component';
import { EventtypeeditComponent } from './admin/eventtypeedit/eventtypeedit.component';
import { GeteventtypeComponent } from './guest/geteventtype/geteventtype.component';
import { GeteventsComponent } from './guest/getevents/getevents.component';
import { GetannualreportComponent } from './guest/getannualreport/getannualreport.component';
import { PaymentComponent } from './guest/payment/payment.component';
import { StateComponent } from './admin/state/state.component';
import { StateviewComponent } from './admin/stateview/stateview.component';
import { StateeditComponent } from './admin/stateedit/stateedit.component';




const routes: Routes = [
  {path:'',redirectTo:'/guestmaster/guesthome', pathMatch:'full'},
  {path:"payment/:id",component:PaymentComponent},
  {path:"adminmaster",component:AdminmasterComponent,
    children:[
      {path:"adminhome",component:AdminhomeComponent},
      {path:"state",component:StateComponent},
      {path:"stateview",component:StateviewComponent},
      {path:"stateedit/:id",component:StateeditComponent},
      {path:"district",component:DistrictComponent},
      {path:"districtview",component:DistrictviewComponent},
      {path:"districtedit/:id",component:DistricteditComponent},
      {path:"bylaws",component:BylawsComponent},
      {path:"bylawsview",component:BylawviewsComponent},
      {path:"bylawsedit/:id",component:BylaweditComponent},
      {path:"boardmembers",component:BoardmembersComponent},
      {path:"boardmembersview",component:BoardmembersviewComponent},
      {path:"boardmembersedit/:id",component:BoardmemberseditComponent},
      {path:"institution",component:InstitutionComponent},
      {path:"institutionview",component:InstitutionviewComponent},
      {path:"institutionedit/:id",component:InstitutioneditComponent},
      {path:"affiliates",component:AffiliatesComponent},
      {path:"affiliatesview",component:AffiliatesviewComponent},
      {path:"affiliatesedit/:id",component:AffiliateseditComponent},
      {path:"eventtype",component:EventtypeComponent},
      {path:"eventtypeview",component:EventtypeviewComponent},
      {path:"eventtypeedit/:id",component:EventtypeeditComponent},
      {path:"events",component:EventsComponent},
      {path:"eventsview",component:EventsviewComponent},
      {path:"eventsedit/:id",component:EventseditComponent},
      {path:"annualreport",component:AnnualreportComponent},
      {path:"annualreportview",component:AnnualreportviewComponent},
      {path:"annualreportedit/:id",component:AnnualreporteditComponent},
      {path:"signupview",component:SignupviewComponent},
      {path:"membershiptype",component:MembershiptypeComponent},
      {path:"membershiptypeview",component:MembershiptypeviewComponent},
      {path:"membershiptypeedit/:id",component:MembershiptypeeditComponent},
      {path:"membershipsubscription",component:MembershipsubscriptionComponent}, 
      {path:"membershipsubscriptionview",component:MembershipsubscriptionviewComponent},
      {path:"membershipsubscriptionedit/:id",component:MembershipsubscriptioneditComponent},

      
     
      
      
      
     

    ]
  },


  {path:"guestmaster",component:GuestmasterComponent,
    children:[
      {path:"guesthome",component:GuesthomeComponent},
      {path:"signup/:id",component:SignupComponent},
      // {path:"subscribe/:id",component:SubscribeComponent},
      {path:"getboardmembers",component:GetboardmembersComponent},
      {path:"getaffiliates",component:GetaffiliatesComponent},
      {path:"CodeofConduct",component:CodeofConductComponent},
      {path:"getbylaws",component:GetbylawComponent},
      {path:"whyjoin",component:WhyjoinComponent},
      {path:"getmembershipsubscription",component:GetmembershipsubscriptionComponent},
      {path:"about",component:AboutComponent},
      {path:"getinstitution",component:GetinstitutionComponent},
      {path:"geteventtype",component:GeteventtypeComponent},
      {path:"getevents",component:GeteventsComponent},
      {path:"getannualreport",component:GetannualreportComponent},
     

    ]
  },

  {path:"customermaster",component:CustomermasterComponent,
    children:[
      {path:"customerhome",component:CustomerhomeComponent},
   
     

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
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
import { SubscribeComponent } from './guest/subscribe/subscribe.component';
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
import { ExampleComponent } from './example/example.component';
import { StateComponent } from './admin/state/state.component';
import { StateviewComponent } from './admin/stateview/stateview.component';
import { StateeditComponent } from './admin/stateedit/stateedit.component';





@NgModule({
  declarations: [
        AppComponent,
        AdminmasterComponent,
        AdminhomeComponent,
        GuestmasterComponent,
        GuesthomeComponent,
        CustomermasterComponent,
        CustomerhomeComponent,
        DistrictComponent,
        DistrictviewComponent,
        DistricteditComponent,
        BylawsComponent,
        BylawviewsComponent,
        BylaweditComponent,
        BoardmembersComponent,
        BoardmembersviewComponent,
        BoardmemberseditComponent,
        InstitutionComponent,
        InstitutionviewComponent,
        InstitutioneditComponent,
        AffiliatesComponent,
        AffiliatesviewComponent,
        AffiliateseditComponent,
        EventsComponent,
        EventsviewComponent,
        EventseditComponent,
        AnnualreportComponent,
        AnnualreportviewComponent,
        AnnualreporteditComponent,
        SignupComponent,
        SignupviewComponent,
        SubscribeComponent,
        MembershiptypeComponent,
        MembershiptypeviewComponent,
        MembershiptypeeditComponent,
        MembershipsubscriptionComponent,
        MembershipsubscriptionviewComponent,
        MembershipsubscriptioneditComponent,
        GetboardmembersComponent,
        GetaffiliatesComponent,
        CodeofConductComponent,
          GetbylawComponent,
          WhyjoinComponent,
          GetmembershipsubscriptionComponent,
          AboutComponent,
          GetinstitutionComponent,
          EventtypeComponent,
          EventtypeviewComponent,
          EventtypeeditComponent,
          GeteventtypeComponent,
          GeteventsComponent,
          GetannualreportComponent,
          PaymentComponent,
          ExampleComponent,
          StateComponent,
          StateviewComponent,
          StateeditComponent
        
        
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

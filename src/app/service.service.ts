import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl ='http://127.0.0.1:8000/api/';
  
 

  constructor(private http:HttpClient) { }

  getstates(){
    return this.http.get(`${this.baseUrl}state`);
  }
  district(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}district`,formData);
  }
  getdistrict(){
    return this.http.get(`${this.baseUrl}district`);
  }

  getdistrictbyid(data:number){
    return this.http.get(`${this.baseUrl}getdistrictbyid/${data}`);
  }
  deletedistrict(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}district/${data}`)
  }
  getdistrictData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_district/${data}`)
  }
  updatedistrict(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_district/${data}`,formData);
  }
  addbylaw(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}addbylaw`,formData);
  }
  getbylaw(){
    return this.http.get(`${this.baseUrl}addbylaw`);
  }
  deletebylaw(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}addbylaw/${data}`)
  }
  getbylawData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_addbylaw/${data}`);
  }
  updatebylaw(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_addbylaw/${data}`,formData);
  }
  addmember(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}addmember`,formData);
  }
  getmember(){
    return this.http.get(`${this.baseUrl}addmember`);
  }
  deletemember(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}addmember/${data}`)
  }
  getmemberData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_addmember/${data}`);
  }
  updatemember(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_addmember/${data}`,formData);
  }
  institution(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}institution`,formData);
  }
  getinstitution(){
    return this.http.get(`${this.baseUrl}institution`);
  }
  deleteinstitution(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}institution/${data}`)
  }
  getinstitutionData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_institution/${data}`);
  }
  updateinstitution(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_institution/${data}`,formData);
  }
  affiliates(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}affiliates`,formData);
  }
  getaffiliates(){
    return this.http.get(`${this.baseUrl}affiliates`);
  }
  deleteaffiliates(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}affiliates/${data}`)
  }
  getaffiliatesData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_affiliates/${data}`);
  }
  updateaffiliates(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_affiliates/${data}`,formData);
  }
  events(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}events`,formData);
  }
  getevents(){
    return this.http.get(`${this.baseUrl}events`);
  }
  deleteevents(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}events/${data}`)
  }
  geteventsData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_events/${data}`);
  }
  updateevents(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_events/${data}`,formData);
  }
  annualreport(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}annualreport`,formData);
  }
  getannualreport(){
    return this.http.get(`${this.baseUrl}annualreport`);
  }
  deleteannualreport(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}annualreport/${data}`)
  }
  getannualreportData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_annualreport/${data}`);
  }
  updateannualreport(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_annualreport/${data}`,formData);
  }
  signup(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}signup`,formData);
  }
  getsignup(){
    return this.http.get(`${this.baseUrl}signup`);
  }
  deletesignup(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}signup/${data}`)
  }
  subscription(formData:FormData,data:number):Observable<any> {
    return this.http.post(`${this.baseUrl}subscription/${data}`,formData);
  }
  addmembershiptype(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}addmembershiptype`,formData);
  }
  getmembershiptype(){
    return this.http.get(`${this.baseUrl}addmembershiptype`);
  }
  deletemembershiptype(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}addmembershiptype/${data}`)
  }
  getmembershiptypeData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_membershiptype/${data}`);
  }
  updatemembershiptype(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_membershiptype/${data}`,formData);
  }
  addmembershipsubscription(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}addmembershipsubscription`,formData);
  }
  getmembershipsubscription(){
    return this.http.get(`${this.baseUrl}addmembershipsubscription`);
  }
  deletemembershipsubscription(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}addmembershipsubscription/${data}`)
  }
  getmembershipsubscriptionData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_membershipsubscription/${data}`)
  }
  updatemembershipsubscription(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_membershipsubscription/${data}`,formData);
  }
  addeventtype(formData:FormData):Observable<any> {
    return this.http.post(`${this.baseUrl}addeventtype`,formData);
  }
  geteventtype(){
    return this.http.get(`${this.baseUrl}addeventtype`);
  }
  deleteeventtype(data:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}addeventtype/${data}`)
  }
  geteventtypeData(data:number){
    console.log(data);
    return this.http.get(`${this.baseUrl}update_eventtype/${data}`);
  }
  updateeventtype(data: any, formData: FormData){
    return this.http.post(`${this.baseUrl}update_eventtype/${data}`,formData);
  }
  getpayment(data:number){
    return this.http.get(`${this.baseUrl}getpayment/${data}`);

  }
 
  
}

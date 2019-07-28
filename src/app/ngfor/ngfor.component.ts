import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

user:any = {
  bio:[  'Name : A.Ganeshsurya',
  'Age : 21',
  'Address : 78/A, H.M.S colony, Tvs Backside, Madurai',
  'Contact No : 9344859924'],
  bio1:[  'Name : S.Karthickraja',
  'Age : 21',
  'Address : 78/A, H.M.S colony, Tvs Backside, Madurai',
  'Contact No : 8015714700'],
  bio2:[  'Name : M.Santhoshpandian',
  'Age : 21',
  'Address : 78/A, H.M.S colony, Tvs Backside, Madurai',
  'Contact No : 9751769189'],
  bio3:[  'Name : M.Kaviyarasan',
  'Age : 21',
  'Address : 78/A, H.M.S colony, Tvs Backside, Madurai',
  'Contact No : 9894161297']
};

  constructor() { }

  ngOnInit() {
  }

}

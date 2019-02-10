import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customers: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let token = localStorage.getItem("jwt");
    this.http.get("http://localhost:1405/api/client/get", {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "assets-Type": "application/json"
      })
    }).subscribe(response => {
      this.customers = response;
    }, err => {
      console.log(err)
    });
  }

}

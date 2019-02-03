import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [``]
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let token = localStorage.getItem("jwt");
    this.http.get("http://acs.hostingasp.pl/api/customers", {
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

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'demo-modal-service-static',
  templateUrl: './clients.component.html', 
})
export class ClientsComponent implements OnInit {
  source = new LocalDataSource();
  modalRef: BsModalRef;
  client: Client;

  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      custom: [{ name: 'ourCustomAction', title: 'Szczegóły ' }],
    },
    columns: {
      clinetId: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      surename: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      },
      city: {
        title: 'Miasto'
      },
      postalCode: {
        title: 'Kod pocztowy'
      },
      street: {
        title: 'Ulica'
      },
      houseNumber: {
        title: 'Numer domu'
      },
      phoneNumber: {
        title: 'Tel.'
      },
    }
  };

  

  onCustomAction(event, template: TemplateRef<any>) {
    console.log(event.data.clinetId);
    this.router.navigate(['/clientDetails', event.data.clinetId]);
    //this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    //this.getClientById(event.data.clinetId).then((data) => {
    //  console.log(data);
    //  this.client = new Client(data.street, data.houseNumber, data.phoneNumber, data.postalCode, data.email, data.city, data.name, data.surename, data.regon, data.nip);
    //  console.log("utworzono nowy obiekt");
    //});
  }


  dane: any[];
  getData(): Promise<any> {
    let promis = new Promise((resolve, reject) => {
      let apiURL = "http://localhost:1405/api/client/GetCompanyCustomers";
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(res);
          }
        );
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    return promis;
  }

  getClientById(id: string): Promise<any> {

    let params = new HttpParams().set("id", id);

    let promis = new Promise((resolve, reject) => {
      let apiURL = "http://localhost:1405/api/client/GetClient";
      this.http.get(apiURL, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
        params: params
      })
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(res);
          }
        );
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    return promis;
  }

  constructor(private router: Router, private http: HttpClient, private modalService: BsModalService) {}
  ngOnInit() {
    //this.source = new LocalDataSource();
    this.client = new Client('', '', '', '', '', '', '', '', '', '');
    this.getData().then((data) => {
      this.source.load(data);
    });
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
   // model = new Client();
  }

  model1 = { options: '2' };
  model = '1';

  addClient(form: NgForm) {
    let credentials = JSON.stringify(form.value);

    console.log(form.value.PhoneNumber);
    var urlIndividual = "http://localhost:1405/api/client/AddIndividualCustomer";
    var urlCompany =  "http://localhost:1405/api/client/AddCompanyCustomer";
    let url = urlCompany;
    if (this.model=="2") {
      url = urlIndividual;
    }
    console.log(this.model);

    this.http.post(url, credentials,     
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe(response => {      
        
      }, err => {
      });

    this.ngOnInit();
  }
}

export class Client {

  constructor(
    public Street: string,
    public HouseNumber: string,
    public PhoneNumber: string,
    public PostalCode: string,
    public Email: string,
    public City: string,
    public Name: string,
    public SureName: string,
    public Regon: string,
    public Nip: string,
  ) { }

}

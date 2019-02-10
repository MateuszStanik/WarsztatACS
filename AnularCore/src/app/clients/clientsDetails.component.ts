import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-customers',
  templateUrl: './clientsDetails.component.html',
  styles: [``]
})
export class ClientsDetailsComponent implements OnInit {
  modalRef: BsModalRef;
  source: LocalDataSource;
  customers: any;
  id: number;
  client = new Client('', '', '', '', '', '', '', '', '', '');
  car: Car;
  settings = {
    delete: {
      confirmDelete: true,
    },
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      custom: [{ name: 'onNewOrder', title: 'Szczegóły samochodu' }],
    },
    columns: {      
      carId: {
        title: 'ID'
      },
      brand: {
        title: 'Marka'
      },
      model: {
        title: 'Model'
      },
      capacity: {
        title: 'Pojemność'
      },
      carIdentificator: {
        title: 'VIN'
      },
      engineType: {
        title: 'Rodzaj silnika'
      },
      power: {
        title: 'Moc'
      },
      year: {
        title: 'Rocznik'
      }
    }
  };

  onDeleteConfirm(event) {
    console.log(event);
    let url = "http://localhost:1405/api/car/DeleteCar";
    let params = new HttpParams().set("id", event.data.carId);
    console.log(event.data.carId);

    this.http.delete(url,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
        params: params
      }).subscribe(response => {

      }, err => {
      });
    this.getCars(this.id).then((data) => {
      this.source.load(data);
    });
    this.ngOnInit();
  }

  onNewOrder(event) {
    console.log(event.data.clinetId);
    //this.router.navigate(['/carGetCarDetailsById', event.data.clinetId]);
    this.router.navigate(['/cars', event.data.carId]);
  }

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.getClientById(this.id).then((data) => {
      console.log(data);
      this.client = new Client(data.street, data.houseNumber, data.phoneNumber, data.postalCode, data.email, data.city, data.name, data.surename, data.regon, data.nip);
      console.log("utworzono nowy obiekt");
    });

    this.source = new LocalDataSource();

    this.getCars(this.id).then((data) => {
      this.source.load(data);
      console.log(data);
    });
  }
  getCars(id: number): Promise<any> {
    let params = new HttpParams().set("id", id.toString());
    let promis = new Promise((resolve, reject) => {
      let apiURL = "http://localhost:1405/api/car/GetCarsForClient";
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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.car = new Car(0, '', '', new Date(), '', 0, 0, '');
  }
  addCar() {
    let url = "http://localhost:1405/api/car/AddCarForClient";

    var body = {
      ClientId: this.id,
      Model: this.car.Model,
      Brand: this.car.Brand,
      Capacity: this.car.Capacity,
      Year: this.car.Year,
      Power: this.car.Power,
      EngineType: this.car.EngineType,
      CarIdentificator: this.car.CarIdentificator
    }
    this.http.post(url, body,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe(response => {

      }, err => {
      });
    this.getCars(this.id).then((data) => {
      this.source.load(data);
    });
  }


  getClientById(id: number): Promise<any> {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    });
    let params = new HttpParams().set("id", id.toString());

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
          res => { 
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

export class Car {
  constructor(
    public ClientId: number,
    public Brand : string,
    public Model: string,
    public Year: Date,
    public EngineType: string,
    public Capacity: number,
    public Power: number,
    public CarIdentificator: string,
  ) { }
}

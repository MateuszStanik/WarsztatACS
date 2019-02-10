import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  id: number;
  car = new Car(0, '', '', new Date(), '', 0, 0, '');

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });   

    this.getCarById(this.id).then((data) => {
      this.car = new Car(data.clientId, data.brand, data.model, data.year, data.engineType, data.capacity, data.power, data.carIdentificator);
      console.log("utworzono nowy obiekt - samochód");
    });

  }

  getCarById(id: number): Promise<any> {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    });
    let params = new HttpParams().set("id", id.toString());

    let promis = new Promise((resolve, reject) => {
      let apiURL = "http://localhost:1405/api/car/GetCarDetailsById";
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
export class Car {
  constructor(
    public ClientId: number,
    public Brand: string,
    public Model: string,
    public Year: Date,
    public EngineType: string,
    public Capacity: number,
    public Power: number,
    public CarIdentificator: string,
  ) { }
}

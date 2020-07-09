import { Component, OnInit } from '@angular/core';
import { Car, CarService } from './car.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  cars: Car[];
  public brandOptionsOptions: SelectItem[];
  public brandFilter: string;

  constructor(private carService: CarService) { }

  ngOnInit() {


    this.brandOptionsOptions = [
      {label: 'VW', value: 'VW'},
      {label: 'Audi', value: 'Audi'},
    ];

    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}

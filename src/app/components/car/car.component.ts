import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[] = [];
  carsDto : CarDto[] = [];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    //this.getCars();
    this.getCarsDto();
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    });
  }

  getCarsDto(){
    this.carService.getCarsDto().subscribe(response=>{
      this.carsDto = response.data
    });
  }
}
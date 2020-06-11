import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars = [
    {
      id: "0",
      Marquevoiture: "honda",
    N_immatriculation: "908456 Ma",
    NBsiege: "4",
    Color: "red",
      image: "https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg",
    },
    {
      id: "1",
      Marquevoiture: "tata",
      N_immatriculation: "5465464 D",
      NBsiege: "5",
      Color: "bleu",
      image: "https://img0.gaadicdn.com/images/car-images/265x110/Tata/Tata-Nexon/047.jpg",
    },
    {
      id: "2",
      Marquevoiture: "Mahindra",
      N_immatriculation: "465465 S",
      NBsiege: "4",
      Color: "orange",
      image: "https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg",
    },
    ];
    constructor(private router: Router) {}

  ngOnInit(): void {
  }
  goToCarDetails(car) {
    
    this.router.navigate(["car-details", JSON.stringify(car)]);
  }

}

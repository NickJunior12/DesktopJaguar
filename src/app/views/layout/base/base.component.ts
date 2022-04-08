import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  isLoading: boolean;
  imagenMascota: string;
  cicloMascota: boolean = true;

  constructor(private router: Router) { 

    // Spinner for lazyload modules
    router.events.forEach((event) => { 
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });

    
  }

  cambiarMascota() {
    if(this.imagenMascota === "https://interacthink.com/jaguar/desktop/assets/images/ConejoSaludito.gif"){
      this.imagenMascota = "https://interacthink.com/jaguar/desktop/assets/images/Carita.gif";
    }
    else if(this.imagenMascota === "https://interacthink.com/jaguar/desktop/assets/images/Carita.gif"){
      this.imagenMascota = "https://interacthink.com/jaguar/desktop/assets/images/Conejito.gif";
      
    }
    else{
      this.pauseTimer();
      this.imagenMascota ="";
      this.cicloMascota = false;
    }
    
  }

  timeLeft: number = 10;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } 
     
      else {
        this.cambiarMascota();
        this.timeLeft = 10;
      }
    },1000)
  }
pauseTimer() {
    clearInterval(this.interval);
  }
  ngOnInit(): void {
    this.imagenMascota = "https://interacthink.com/jaguar/desktop/assets/images/ConejoSaludito.gif";
    this.startTimer();
  }

}

import { Component, OnInit } from '@angular/core';
import { BeneficiosService } from '../../../core/services/beneficios.service';
import { BeneficioModel } from '../../../core/models/beneficio-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beneficio-detalle',
  templateUrl: './beneficio-detalle.component.html',
  styles: [
  ]
})
export class BeneficioDetalleComponent implements OnInit {

  beneficio: BeneficioModel;
  id: string;

  constructor( private ben: BeneficiosService, private aRouter: ActivatedRoute ) { 

    this.id = aRouter.snapshot.paramMap.get('id');

  }

  

  ngOnInit(): void {
    this.isShow();
  }

  isShow() {
    if ( this.id !== null) {
      this.ben.getBeneficio(this.id).subscribe( data => {
        this.beneficio = data.bene;

      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { BeneficioModel } from 'src/app/core/models/beneficio-model';
import { BeneficiosService } from 'src/app/core/services/beneficios.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {

  listaBeneficios: BeneficioModel[] = [];

  constructor(private beneficio: BeneficiosService) { }

  ngOnInit(): void {
    this.getBeneficios();
  }

  getBeneficios() {
    this.beneficio.getBeneficios()
            .subscribe (resp => {
              console.log('Obteniendo datos de beneficios');
              console.log(resp.bene);
              this.listaBeneficios = resp.bene;
            }, error => {
                console.log('error');
            });
  }

}

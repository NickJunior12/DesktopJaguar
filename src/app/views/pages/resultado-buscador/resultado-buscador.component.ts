import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiaModel } from 'src/app/core/models/noticia-model';
import { NoticiasService } from 'src/app/core/services/noticias.service';

@Component({
  selector: 'app-resultado-buscador',
  templateUrl: './resultado-buscador.component.html',
  styleUrls: ['./resultado-buscador.component.scss']
})
export class ResultadoBuscadorComponent implements OnInit {

  texto: string;
  listaNoticias: NoticiaModel[] = [];

  constructor(private aRouter: ActivatedRoute, private news: NoticiasService, private router: Router) { 
    this.texto = aRouter.snapshot.paramMap.get('texto');

    console.log(`El texto a buscar es ${this.texto}`);

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }

  ngOnInit(): void {

    this.getNoticiasBuscadas();
  }

 
  getNoticiasBuscadas() {
    this.news.getNoticiasBuscadas(this.texto)
            .subscribe (resp => {
              console.log('Obteniendo datos de los resultados de noticias');
              console.log(resp.notis);
              this.listaNoticias = resp.notis;
            }, error => {
                console.log('error');
            });
  }

}

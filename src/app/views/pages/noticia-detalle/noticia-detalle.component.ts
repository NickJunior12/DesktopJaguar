import { Component, OnInit } from '@angular/core';
import { NoticiaModel } from 'src/app/core/models/noticia-model';
import { NoticiasService } from 'src/app/core/services/noticias.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})
export class NoticiaDetalleComponent implements OnInit {

  noticia: NoticiaModel;
  constructor( private noti: NoticiasService ) { }

  ngOnInit(): void {
  }

  getNoticia(id: number){
    this.noti.getNoticias()
              .subscribe (resp => {
                console.log('Obteniendo datos de una noticia');
                console.log(resp.notis);
                this.noticia = resp.notis;
              }, error => {
                  console.log('error');
              });
  }

}

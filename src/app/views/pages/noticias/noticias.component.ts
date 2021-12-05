import { Component, OnInit } from '@angular/core';
import { NoticiaModel } from 'src/app/core/models/noticia-model';
import { NoticiasService } from 'src/app/core/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  listaNoticias: NoticiaModel[] = [];

  constructor( private news: NoticiasService ) { }

  ngOnInit(): void {
    this.getNoticias();
  }

    getNoticias() {
      this.news.getNoticias()
              .subscribe (resp => {
                console.log('Obteniendo datos de noticias');
                console.log(resp.notis);
                this.listaNoticias = resp.notis;
              }, error => {
                  console.log('error');
              });
    }

}

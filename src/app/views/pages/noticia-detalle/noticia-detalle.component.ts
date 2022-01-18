import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaModel } from 'src/app/core/models/noticia-model';
import { NoticiasService } from 'src/app/core/services/noticias.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})
export class NoticiaDetalleComponent implements OnInit {

  noticia: NoticiaModel;
  id: string;

  constructor( private noti: NoticiasService, private aRouter: ActivatedRoute ) { 

    this.id = aRouter.snapshot.paramMap.get('id');

    console.log(`El id es ${this.id}`);
  }

  

  ngOnInit(): void {
    this.isShow();
  }

  isShow() {
    if ( this.id !== null) {
      this.noti.getNoticia(this.id).subscribe( data => {
        this.noticia = data.notis;
        console.log(this.noticia);
      });
    }
  }

}

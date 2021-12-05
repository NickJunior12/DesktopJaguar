import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoticiaModel } from 'src/app/core/models/noticia-model';
import { NoticiasService } from '../../../core/services/noticias.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  listaNoticias: NoticiaModel[] = [];

  constructor(private noticiaService: NoticiasService) {}

  getNoticias() {
    this.noticiaService.getNoticias()
            .subscribe (resp => {
              console.log(resp);
              console.log(resp.notis);
              this.listaNoticias = resp.notis;
            }, error => {
                console.log('error');
            });
  }

  ngOnInit(): void {
    this.getNoticias();
  }

}

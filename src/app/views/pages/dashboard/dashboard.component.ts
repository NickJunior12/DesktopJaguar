import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoticiaModel } from 'src/app/core/models/noticia-model';
import { NoticiasService } from '../../../core/services/noticias.service';
import { BannersService } from '../../../core/services/banners.service';
import { BannerModel } from 'src/app/core/models/banner-model';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  listaNoticias: NoticiaModel[] = [];
  listaBanners: BannerModel[] = [];
  nombreUsuario: string;

  constructor(private noticiaService: NoticiasService, private bannerService: BannersService, private auth: AuthService) {}

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
  

  getBanners(){
    this.bannerService.getBanners().subscribe (resp => {
      console.log('banners obtenidos');
      console.log(resp.banners);
      this.listaBanners = resp.banners;
    }, error => {
      console.log('error');
    });
  }

  setNombreUsuario(){
    this.nombreUsuario = this.auth.getNombreUsuario();
  }

  getNombreUsuario(){
    return this.nombreUsuario;
  }

  ngOnInit(): void {
    this.getNoticias();
    this.getBanners();
  }

}

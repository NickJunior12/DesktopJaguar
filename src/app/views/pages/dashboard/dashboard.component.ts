import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoticiaModel } from 'src/app/core/models/noticia-model';
import { NoticiasService } from '../../../core/services/noticias.service';
import { BannersService } from '../../../core/services/banners.service';
import { BannerModel } from 'src/app/core/models/banner-model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  listaNoticias: NoticiaModel[] = [];
  listaBanners: BannerModel[] = [];

  constructor(private noticiaService: NoticiasService, private bannerService: BannersService) {}

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

  ngOnInit(): void {
    this.getNoticias();
    this.getBanners();
  }

}

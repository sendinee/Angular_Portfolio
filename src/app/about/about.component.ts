import { Component, OnInit } from '@angular/core';
import * as awesome from '@fortawesome/free-solid-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mapMarker: any;
  building: any;
  mobile: any;
  email: any;
  birthday: any;
  badge: any;
  home: any;
  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
    this.mapMarker = awesome.faMapMarker;
    this.building = awesome.faCity;
    this.email = awesome.faMailBulk;
    this.mobile = awesome.faMobile;
    this.birthday = awesome.faBirthdayCake;
    this.badge = awesome.faGraduationCap;
    this.home = awesome.faLaptopHouse;
  }

}

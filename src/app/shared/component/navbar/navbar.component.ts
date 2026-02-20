import { Component } from '@angular/core';
import { ScrollService } from '../../../../models/scroll-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, MobileNavbarComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  open = false;


  constructor(private scrollService: ScrollService, private translate: TranslateService) {
    const savedLang = localStorage.getItem('app-lang') as 'de' | 'en' | null;
    const defaultLang: 'de' | 'en' = savedLang ?? 'en';

    this.translate.setFallbackLang('en');
    this.translate.use(defaultLang);
  }


  switchLang(lang: 'de' | 'en') {
    this.translate.use(lang);
    localStorage.setItem('app-lang', lang);
  }


  goTop() {
    this.scrollService.scrollToTop();
  }

}

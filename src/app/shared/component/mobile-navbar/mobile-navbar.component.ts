import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss'
})
export class MobileNavbarComponent {
  @Output() close = new EventEmitter<void>();


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('app-lang');
    if (savedLang) {
      this.translate.use(savedLang);
    } else {
      this.translate.use('en');
    }
  }


  switchLang(lang: 'de' | 'en') {
    this.translate.use(lang);
    localStorage.setItem('app-lang', lang);
  }

}

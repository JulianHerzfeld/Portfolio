import { Component } from '@angular/core';
import { ScrollService } from '../../../../models/scroll-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(private scrollService: ScrollService, private translate: TranslateService) {
    this.translate.use('en');
  }


  switchLang(lang: 'de' | 'en') {
    this.translate.use(lang);
    console.log("hier passiert was");
    
  }


  goTop() {
    this.scrollService.scrollToTop();
  }

}

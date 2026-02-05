import { Component } from '@angular/core';
import { Scroll } from '@angular/router';
import { ScrollService } from '../../../models/scroll-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private scrollService: ScrollService) { }

  goToContact() {
    this.scrollService.scrollToId('contact-me');
  }

}

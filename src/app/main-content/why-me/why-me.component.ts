import { Component } from '@angular/core';
import { ScrollService } from '../../../models/scroll-service';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule, AnimateOnScrollDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

  constructor (private scrollService: ScrollService) { }

  goToContact() {
    this.scrollService.scrollToId('contact-me');
  }

}

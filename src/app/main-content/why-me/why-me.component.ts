import { Component } from '@angular/core';
import { ScrollService } from '../../../models/scroll-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

  constructor (private scrollService: ScrollService) { }

  goToContact() {
    this.scrollService.scrollToId('contact-me');
  }

}

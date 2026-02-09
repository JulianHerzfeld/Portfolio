import { Component } from '@angular/core';
import { ScrollService } from '../../../../models/scroll-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  constructor(private service: ScrollService) { }


  mailNow() {
    this.service.openMail();
  }

}

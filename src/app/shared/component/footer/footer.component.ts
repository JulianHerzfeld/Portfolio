import { Component, Input } from '@angular/core';
import { ScrollService } from '../../../../models/scroll-service';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, NgClass, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() mode: 'default' | 'special' = 'default';


  constructor(private service: ScrollService) { }


  mailNow() {
    this.service.openMail();
  }

}

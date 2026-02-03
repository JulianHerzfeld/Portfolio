import { Component } from '@angular/core';
import { ScrollService } from '../../../../models/scroll-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(private scrollService: ScrollService) { }


  goTop() {
    this.scrollService.scrollToTop();
  }

}

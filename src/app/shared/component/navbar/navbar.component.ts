import { Component } from '@angular/core';
import { scrollToTop } from '../../../../models/scroll-utils';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrollToTop = scrollToTop;

}

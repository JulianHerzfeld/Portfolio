import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ScrollService } from '../../../models/scroll-service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  constructor(private service: ScrollService) { }

  
  checkbox = new FormControl(false);


  goTop() {
    this.service.scrollToTop();
  }


  mailNow() {
    this.service.openMail();
  }


  callNow() {
    this.service.call();
  }

}

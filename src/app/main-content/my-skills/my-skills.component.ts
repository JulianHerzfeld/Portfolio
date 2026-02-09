import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollService } from '../../../models/scroll-service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [NgForOf, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(private scrollService: ScrollService) { }

  skillImgs: string[] = [
    'assets/img/icons/angular.svg',
    'assets/img/icons/type-script.svg',
    'assets/img/icons/java-script.svg',
    'assets/img/icons/html.svg',
    'assets/img/icons/css.svg',
    'assets/img/icons/api.svg',
    'assets/img/icons/firebase.svg',
    'assets/img/icons/git.svg',
    'assets/img/icons/material-design.svg'
  ];


  goToContact() {
    this.scrollService.scrollToId('contact-me');
  }

}

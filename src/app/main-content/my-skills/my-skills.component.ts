import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

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

}

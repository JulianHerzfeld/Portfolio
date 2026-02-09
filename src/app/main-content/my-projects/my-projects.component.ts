import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [SingleProjectComponent, NgForOf, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  projects = [
    {
      title: 'Join',
      skills: 'JavaScript | HTML | CSS | Firebase',
      description: 'projects.join.description',
      imgUrlProjekt: 'assets/img/projects/join.svg',
      githubUrl: 'https://github.com/JulianHerzfeld/Join',
      liveTestUrl: '#'
    },
    {
      title: 'Sharkie',
      skills: 'JavaScript | HTML | CSS',
      description: 'projects.sharkie.description',
      imgUrlProjekt: 'assets/img/projects/sharkie.svg',
      githubUrl: 'https://github.com/JulianHerzfeld/Sharkie-Project',
      liveTestUrl: '#'
    }
  ];
}

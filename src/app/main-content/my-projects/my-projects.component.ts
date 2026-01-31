import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [SingleProjectComponent, NgForOf],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  projects = [
    { title: 'Join',
      skills: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imgUrlProjekt: 'assets/img/projects/join.svg',
      githubUrl: '#',
      liveTestUrl: '#'
    },
    { title: 'Sharkie',
      skills: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imgUrlProjekt: 'assets/img/projects/sharkie.svg',
      githubUrl: '#',
      liveTestUrl: '#'
    }
  ];
}

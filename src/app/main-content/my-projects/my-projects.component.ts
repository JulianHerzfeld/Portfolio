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
      skills: 'JavaScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imgUrlProjekt: 'assets/img/projects/join.svg',
      githubUrl: 'https://github.com/JulianHerzfeld/Join',
      liveTestUrl: '#'
    },
    { title: 'Sharkie',
      skills: 'JavaScript | HTML | CSS',
      description: '2D action game based on an object-oriented approach. Control Sharkie underwater and defeat enemies by shooting bubbles.',    //2D-Action-Game auf objektorientierter Basis. Steuere Sharkie durch die Unterwasserwelt und besiege Gegner mit Blubberblasen.
      imgUrlProjekt: 'assets/img/projects/sharkie.svg',
      githubUrl: 'https://github.com/JulianHerzfeld/Sharkie-Project',
      liveTestUrl: '#'
    }
  ];
}

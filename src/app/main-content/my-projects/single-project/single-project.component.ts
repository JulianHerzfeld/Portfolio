import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [NgIf],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() skills: string = '';
  @Input() imgUrlProjekt: string = '';
  @Input() githubUrl: string = '';
  @Input() liveTestUrl: string = '';
  @Input() reverse = false;

}

import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/content/projects';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: Array<Project> = Projects;

  constructor() { }

  ngOnInit(): void {
  }
}

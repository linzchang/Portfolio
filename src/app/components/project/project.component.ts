import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;

  constructor() { }

  ngOnInit(): void {
  }

  visitSite(url: string): void {
    window.open(url, '_blank');
  }
}

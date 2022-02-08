import {Component, Injectable, OnInit} from '@angular/core';
import { ProjectService} from '../../Service/Project.service';
import { environment } from 'src/environments/environment';

// @ts-ignore
@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}

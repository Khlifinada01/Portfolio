import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/User';
// @ts-ignore
import { PortfolioService} from '../../Service/Portfolio.service';
import {UserService} from '../../Service/User.Service';
import {Observable} from 'rxjs';
import {HttpEvent} from '@angular/common/http';
import { Portfolio} from '../../Models/Portfolio';
declare var $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  users: User[] = [];
  portfolios: Portfolio[] = [];

  constructor( private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {

    this.portfolioService.OngetParcours().subscribe((portfolios: Portfolio[]) => {
      console.log(portfolios);
      this.portfolios = portfolios;
    });
  }
}

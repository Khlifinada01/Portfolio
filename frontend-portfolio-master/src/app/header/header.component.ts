import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {PortfolioService} from '../../Service/Portfolio.Service';
import {PortfolioComponent} from '../portfolio/portfolio.component';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private baseUrl: 'http://localhost:8080';
  // @ts-ignore
  public portfolio: PortfolioService[] = new PortfolioComponent();

  constructor(private http: HttpClient, private router: Router, private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolio = this.portfolioService.getter();
  }

    OngetPortfolio() {
    return this.http.get(this.baseUrl + '/portfolios');
  }
  }

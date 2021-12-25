import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/user/login');
  }

}

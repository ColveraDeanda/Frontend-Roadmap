import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { NavComponent } from '../../shared/nav/nav.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, NavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit , OnDestroy {

  userLoginOn: boolean = false;
  userData?: User;

  constructor(private loginService: LoginService){}


  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next:(userData)=>{
        this.userData = userData;
      }
    })
  }

  ngOnDestroy(): void {
    this.loginService.currentUserData.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }


}

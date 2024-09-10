import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {

  public employeeName!: string;

  constructor(activatedRoute: ActivatedRoute) {

    activatedRoute.params.pipe(
      map(({ id }) => id.split('-').join(' '))
    ).subscribe(employee => {
      this.employeeName = employee;
    })



  }
}

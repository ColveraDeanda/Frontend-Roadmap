import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, of, filter, interval, combineLatest, BehaviorSubject, Subject, from, mergeMap, delay, concatMap, switchMap, debounce, debounceTime } from "rxjs";
import { DataBindingComponent } from './components/data-binding/data-binding.component';

export interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    from([0, 1, 2, 3, 4])
      .pipe(
        switchMap((item) => of(item).pipe(delay(1000)))
      )
      .subscribe({
        next: (res) => console.log(res),
        error: () => { },
        complete: () => console.log('Completed')
      }
      )

  }








}

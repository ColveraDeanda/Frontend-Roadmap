import { Component } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public formReg: FormGroup;

  constructor(private userService: UserService,
              private router: Router) {

    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        this.router.navigate(['/login']);
        console.log(response);
      })
      .catch( err => console.error(err));
  }

}

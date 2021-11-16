import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public formSubmitted = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    if (!this.loginForm.valid) {
      this.formSubmitted = true;
      return;
    }


    if (this.loginForm.get('username').value == 'admin' && this.loginForm.get('password').value == 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      this.snackBar.open("Não Autorizado", "Login", {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    }
  }

  register() {
    this.router.navigate(['/signin']);
  }

}

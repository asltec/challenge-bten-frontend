import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  public formSubmitted = false;

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm() {
    this.signinForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: [''],
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  submit() {
    if (!this.signinForm.valid) {
      this.formSubmitted = true;
      return;
    } else {
      this.router.navigate(['/login']);
    }
  }

  getErrorMessage() {
    if (this.signinForm.hasError('required')) {
      return 'Campo Obrigatório';
    }

    return this.signinForm.hasError('cpf') ? 'Cpf não é válido' : '';
  }

  back() {
    this.router.navigate(['/login']);
  }

}

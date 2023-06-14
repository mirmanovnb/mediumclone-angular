import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {registerAction} from '../../store/actions/register.action';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterCompontent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.form = this.fb.group({
      usernsme: ['', Validators.required],
      email: '',
      passwors: '',
    });
    console.log('valid: ', this.form.valid);
  }
  onSubmit(): void {
    console.log(this.form.valid);
    this.store.dispatch(registerAction(this.form.value));
  }
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {RegisterCompontent} from './components/register/register.component';

const routes: Routes = [{path: 'register', component: RegisterCompontent}];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  declarations: [RegisterCompontent],
})
export class AuthModule {}

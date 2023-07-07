import {createAction, props} from '@ngrx/store';
import {ActionTypes} from 'src/app/auth/store/actionTypes';
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {LoginRequestInterface} from '../types/loginRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
);

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
);

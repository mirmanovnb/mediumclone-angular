import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistanceService} from 'src/app/shared/services/persistance.service';
import {Router} from '@angular/router';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            // window.localStorage.setItem('accessToken', currentUser.token);
            this.persistanceServive.set('accessToken', currentUser.token);
            return registerSuccessAction({currentUser});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({errors: errorResponse.error.errors})
            );
          })
        );
      })
    )
  );
  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          console.log('succ');
          this.router.navigateByUrl('/');
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceServive: PersistanceService,
    private router: Router
  ) {}
}

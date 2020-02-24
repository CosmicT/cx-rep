import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { faSpinner, faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import { of as observableOf, Observable } from 'rxjs';
import { NotifierService } from 'src/app/services/notifier.service';
import { Router } from '@angular/router';
import { CognitoSessionService } from 'src/app/services/cognitoSession.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    animations: [
        trigger('forgotPwdState', [
            state('active', style({
                visibility: 'visible',
                opacity: 1
            })),
            state('inactive', style({
                visibility: 'hidden',
                opacity: 0
            })),
            transition('active => inactive', animate('350ms ease-in')),
            transition('inactive => active', animate('350ms ease-in'))
        ]),
        trigger('forgotPwdNextState', [
            state('active', style({
                visibility: 'visible',
                opacity: 1
            })),
            state('inactive', style({
                visibility: 'hidden',
                opacity: 0
            })),
            transition('active => inactive', animate('350ms ease-in')),
            transition('inactive => active', animate('350ms ease-in'))
        ]),
        trigger('signUpState', [
            state('active', style({
                visibility: 'visible',
                opacity: 1
            })),
            state('inactive', style({
                visibility: 'hidden',
                opacity: 0
            })),
            transition('active => inactive', animate('350ms ease-in')),
            transition('inactive => active', animate('350ms ease-in'))
        ]),
        trigger('signUpNextState', [
            state('active', style({
                visibility: 'visible',
                opacity: 1
            })),
            state('inactive', style({
                visibility: 'hidden',
                opacity: 0
            })),
            transition('active => inactive', animate('350ms ease-in')),
            transition('inactive => active', animate('350ms ease-in'))
        ])
    ]
})
export class LoginComponent {

    loginForm: FormGroup;
    loginFormSubmitted: boolean;
    loginFormSubmitting: boolean;
    faSpinner = faSpinner;
    faArrowRight = faArrowRight;
    faEye = faEye;
    faEyeSlash = faEyeSlash;
    togglePasswordDisplay: boolean;
    toggleConfirmPasswordDisplay: boolean;
    forgotPwdForm: FormGroup;
    forgotPwdFormSubmitted: boolean;
    forgotPwdFormSubmitting: boolean;
    forgotPwdState = 'inactive';
    forgotPwdNextState = 'inactive';
    forgotPwdNextForm: FormGroup;
    forgotPwdNextFormSubmitted: boolean;
    forgotPwdNextFormSubmitting: boolean;
    signUpState = 'inactive';
    signUpNextState = 'inactive';
    signUpForm: FormGroup;
    signUpFormSubmitted: boolean;
    signUpFormSubmitting: boolean;
    signUpNextForm: FormGroup;
    signUpNextFormSubmitted: boolean;
    signUpNextFormSubmitting: boolean;
    styleChange: boolean;
    constructor(
        private _FormBuilder: FormBuilder,
        private _NotifierService: NotifierService,
        private _Router: Router,
        private _CognitoSessionService: CognitoSessionService,
        private _SessionService: SessionService
    ) {
        this.loginForm = this._FormBuilder.group({
            email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
            password: ['', [Validators.required]]
        });
        this.loginFormSubmitted = false;
        this.loginFormSubmitting = false;
        this.togglePasswordDisplay = false;
        this.toggleConfirmPasswordDisplay = false;
        this.forgotPwdForm = this._FormBuilder.group({
            email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]]
        });
        this.forgotPwdFormSubmitted = false;
        this.forgotPwdFormSubmitting = false;
        this.forgotPwdNextForm = this._FormBuilder.group({
            code: ['', [Validators.required]],
            password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
            confirmPassword: [null, [Validators.required], this.forgotPwdNextFormValidateConfirmPassword()]
        });
        this.forgotPwdNextFormSubmitted = false;
        this.forgotPwdNextFormSubmitting = false;
        this.signUpForm = this._FormBuilder.group({
            email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
            password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
            confirmPassword: [null, [Validators.required], this.signUpFormValidateConfirmPassword()]
        });
        this.signUpFormSubmitted = false;
        this.signUpFormSubmitting = false;
        this.signUpNextForm = this._FormBuilder.group({
            code: ['', [Validators.required]]
        });
        this.signUpNextFormSubmitted = false;
        this.signUpNextFormSubmitting = false;
        this.styleChange = false;
    }
    async  loginFormSubmit() {
        this.loginFormSubmitted = true;
        if (this.loginForm.valid) {
            this.loginFormSubmitted = false;
            this.loginFormSubmitting = true;
            await Auth.signIn(this.loginForm.value.email, this.loginForm.value.password)
                .then(async () => {
                    await Auth.currentSession()
                        .then(() => {
                            this._SessionService.setSession({ isAuthenticated: 'true' });
                            this._CognitoSessionService.setIsAuthenticated(true);
                            this._Router.navigate(['/welcome-page']);
                        });
                    this.loginFormSubmitting = false;
                })
                .catch(err => {
                    console.log(err);
                    if (err.code === 'NotAuthorizedException') {
                        this._NotifierService.showError(err.message);
                        this.loginFormSubmitting = false;
                    }
                    this._NotifierService.showError(err.message);
                    this.loginFormSubmitting = false;
                });
        }
    }
    async forgotPwdFormSubmit() {
        this.forgotPwdFormSubmitted = true;
        if (this.forgotPwdForm.valid) {
            this.forgotPwdFormSubmitted = false;
            this.forgotPwdFormSubmitting = true;
            await Auth.forgotPassword(this.forgotPwdForm.controls.email.value)
                .then(data => {
                    console.log(data);
                    this.forgotPwdFormSubmitting = false;
                    this.forgotPwdNextState = 'active';
                    this.styleChange = true;
                })
                .catch(err => {
                    console.log(err);
                    this._NotifierService.showError(err.message);
                    this.forgotPwdFormSubmitting = false;
                });
        }
    }
    async forgotPwdNextFormSubmit() {
        this.forgotPwdState = 'inactive';
        this.forgotPwdNextFormSubmitted = true;
        if (this.forgotPwdNextForm.valid) {
            this.forgotPwdFormSubmitted = false;
            this.forgotPwdNextFormSubmitting = true;
            await Auth.forgotPasswordSubmit(
                this.forgotPwdForm.controls.email.value,
                this.forgotPwdNextForm.controls.code.value,
                this.forgotPwdNextForm.controls.confirmPassword.value
            )
                .then(data => {
                    console.log(data);
                    this.forgotPwdNextFormSubmitting = false;
                    this._NotifierService.showSuccess('Password changed successfully');
                    this.forgotPwdNextState = 'inactive';
                    this.styleChange = false;
                    this.forgotPwdForm.reset();
                    this.forgotPwdNextForm.reset();
                    this.togglePasswordDisplay = false;
                    this.toggleConfirmPasswordDisplay = false;
                })
                .catch(err => {
                    console.log(err);
                    this._NotifierService.showError('Password not changed');
                    this.forgotPwdNextFormSubmitting = false;
                });
        }
    }
    async signUpFormSubmit() {
        this.signUpFormSubmitted = true;
        if (this.signUpForm.valid) {
            this.signUpFormSubmitted = false;
            this.signUpFormSubmitting = true;
            await Auth.signUp({
                username: this.signUpForm.controls.email.value,
                password: this.signUpForm.controls.confirmPassword.value
            })
                .then(data => {
                    console.log(data);
                    this.signUpFormSubmitting = false;
                    if (this.signUpForm.controls.email.value.split('@')[1] === 'hitechpeopleinc.com' || this.signUpForm.controls.email.value.split('@')[1] === 'globalhuntindia.in') {
                        this._NotifierService.showSuccess('User Created Successfully and email verified');
                        this.toggleSignUpPwd();
                    } else {
                        this.signUpNextState = 'active';
                    }
                })
                .catch(err => {
                    console.log(err);
                    if (err.code === 'UsernameExistsException') {
                        this._NotifierService.showError(err.message);
                        this.signUpFormSubmitting = false;
                    }
                    this._NotifierService.showError(err.message);
                    this.signUpFormSubmitting = false;
                });
        }
    }
    async signUpNextFormSubmit() {
        this.signUpState = 'inactive';
        this.signUpNextFormSubmitted = true;
        if (this.signUpNextForm.valid) {
            this.signUpNextFormSubmitted = false;
            this.signUpNextFormSubmitting = true;
            await Auth.confirmSignUp(this.signUpForm.controls.email.value, this.signUpNextForm.controls.code.value, {
                forceAliasCreation: true
            }).then(data => {
                console.log(data);
                this.signUpNextFormSubmitting = false;
                this._NotifierService.showSuccess('User sign up successfully');
                this._NotifierService.showSuccess('Email verified');
                this.signUpForm.reset();
                this.signUpNextForm.reset();
                this.signUpNextState = 'inactive';
                this.togglePasswordDisplay = false;
                this.toggleConfirmPasswordDisplay = false;
            })
                .catch(err => {
                    console.log(err);
                    this._NotifierService.showSuccess('Email verified');
                    this.signUpNextFormSubmitting = false;
                });
        }
    }
    forgotPwdNextFormValidateConfirmPassword(): ValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
            return control.value === this.forgotPwdNextForm.controls.password.value ?
                observableOf(null) : observableOf({ notSame: true });
        };
    }
    signUpFormValidateConfirmPassword(): ValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
            return control.value === this.signUpForm.controls.password.value ?
                observableOf(null) : observableOf({ notSame: true });
        };
    }
    toggleForgotPwd() {
        this.signUpState = 'inactive';
        this.forgotPwdNextState = 'inactive';
        this.signUpNextState = 'inactive';
        this.forgotPwdForm.reset();
        this.loginForm.reset();
        this.togglePasswordDisplay = false;
        this.toggleConfirmPasswordDisplay = false;
        this.forgotPwdState = this.forgotPwdState === 'inactive' ? 'active' : 'inactive';
    }
    toggleSignUpPwd() {
        this.forgotPwdState = 'inactive';
        this.forgotPwdNextState = 'inactive';
        this.signUpNextState = 'inactive';
        this.togglePasswordDisplay = false;
        this.loginForm.reset();
        this.signUpForm.reset();
        this.togglePasswordDisplay = false;
        this.toggleConfirmPasswordDisplay = false;
        this.signUpFormSubmitted = false;
        this.loginFormSubmitted = false;
        this.styleChange = this.signUpState === 'active' ? false : true;
        this.signUpState = this.signUpState === 'inactive' ? 'active' : 'inactive';
    }
}
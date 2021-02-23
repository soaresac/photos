import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignUpService } from './signup/signup.service';

@NgModule({
  declarations: [SigninComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    SignUpService
  ]
})
export class HomeModule { }
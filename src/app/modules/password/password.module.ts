import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';


@NgModule({
  declarations: [
    PasswordGeneratorComponent
  ],
  imports: [
    CommonModule,
    PasswordRoutingModule
  ]
})
export class PasswordModule { }

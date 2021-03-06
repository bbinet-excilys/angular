import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class CustomMaterialModule { }

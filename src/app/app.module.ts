import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { RecipegridComponent } from './recipegrid/recipegrid.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeComponent,
    RecipegridComponent,
    CreateRecipeComponent
  ],
  imports: [BrowserModule, CustomMaterialModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

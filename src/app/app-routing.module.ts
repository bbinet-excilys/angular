import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipegridComponent } from './recipegrid/recipegrid.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'recipes', component: RecipegridComponent },
  { path: '**', component: RecipegridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipegridComponent } from './recipegrid/recipegrid.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: 'recipes/*', component: RecipeComponent },
  { path: 'recipes', component: RecipegridComponent },
  { path: '**', component: RecipegridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }
}

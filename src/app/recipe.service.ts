import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './model/recipe.model';
import { MOCK_RECIPES } from '../assets/recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return of(MOCK_RECIPES);
  }
}

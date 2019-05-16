import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './model/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }

  recipeUrl = 'http://10.0.1.39:8080/api/v1/recipes';

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.recipeUrl + "/" + id);
  }

  postRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipeUrl + "/", recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.patch<Recipe>(this.recipeUrl + "/", recipe);
  }

  deleteRecipe(recipe: Recipe): Observable<string> {
    return this.http.delete<string>(this.recipeUrl + "/" + recipe.id);
  }
}

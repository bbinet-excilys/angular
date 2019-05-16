import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipegrid',
  templateUrl: './recipegrid.component.html',
  styleUrls: ['./recipegrid.component.scss']
})
export class RecipegridComponent implements OnInit {
  recipes: Recipe[];

  constructor(recipeService: RecipeService) {
    recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
        this.recipes = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}

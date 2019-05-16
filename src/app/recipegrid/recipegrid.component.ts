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

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
        console.log(result);
        this.recipes = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}

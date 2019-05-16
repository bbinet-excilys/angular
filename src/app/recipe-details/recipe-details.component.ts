import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from "@angular/router";
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.recipeService.getRecipe(id).subscribe(
      (result: Recipe) => {
        console.log(result);
        this.recipe = result;
      },
      error => {
        console.log(error);
      }
    )
  }

}

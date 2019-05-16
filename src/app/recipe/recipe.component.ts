import { Component, OnInit, Input, Inject } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  instructionDisplay = false;

  constructor() { }

  @Input()
  recipe: Recipe;


  toggleInstructions(): void {
    this.instructionDisplay = !this.instructionDisplay;
  }


  ngOnInit() { }
}

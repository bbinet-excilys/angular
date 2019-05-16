import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { MOCK_RECIPES } from '../../assets/recipes.mock'

@Component({
  selector: 'app-recipegrid',
  templateUrl: './recipegrid.component.html',
  styleUrls: ['./recipegrid.component.scss']
})
export class RecipegridComponent implements OnInit {
  recipes: Recipe[] = MOCK_RECIPES

  constructor() { }

  ngOnInit() {
  }

}

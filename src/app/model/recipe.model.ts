import { Ingredients } from './ingredients.model';

export class Recipe {
  id: number;
  name: string;
  picture: string;
  description: string;
  ingredients: Ingredients[];
  instructions: string[];
}

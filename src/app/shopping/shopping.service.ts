import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {

    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(): Ingredient[] {
          return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.getIngredients());
    }

}
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('A Test Recipe', 'This is simply a test',
    // tslint:disable-next-line:max-line-length
    "https://get.pxhere.com/photo/dish-food-produce-vegetable-cuisine-pizza-italian-food-european-food-147477.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a recipe to make a soup', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhmY3UDV6QIeqrgvWjHYzN9VsDi0gbh-rC4i4mUMWHEXMyj38OA')
  ];

  constructor() { }

  ngOnInit() {
  }

}

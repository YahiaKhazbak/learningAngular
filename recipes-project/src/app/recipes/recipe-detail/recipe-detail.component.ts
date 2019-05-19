import { Component, 
  OnInit, 
  Input, 
  ViewChild, 
  ElementRef, 
  Output, 
  EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
}

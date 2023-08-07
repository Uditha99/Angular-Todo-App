import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  color: Array<any> = ['#6F61C0','#A084E8' , '#D5FFE4' , '#FFDDCC']

  constructor(private categoryServise:CategoryService){}

  onSubmit(f:any){

    let randomNumber = Math.floor(Math.random()*this.color.length)

    let todoCategory={
      category:f.value.categoryName,
      colorCode:this.color[randomNumber],
      todoCount: 0
    }

    this.categoryServise.saveCategory(todoCategory)
    console.log(f.value);
    
  }

}

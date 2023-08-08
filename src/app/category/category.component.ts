import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  color: Array<any> = ['#6F61C0','#A084E8' , '#D5FFE4' , '#FFDDCC']

  constructor(private categoryServise:CategoryService , private tosterService: ToastrService){}

  onSubmit(f:any){

    let randomNumber = Math.floor(Math.random()*this.color.length)

    let todoCategory={
      category:f.value.categoryName,
      colorCode:this.color[randomNumber],
      todoCount: 0
    }

    this.categoryServise.saveCategory(todoCategory)
    console.log(f.value);
    this.tosterService.success("saved")
    
  }

}

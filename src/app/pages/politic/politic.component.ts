import { BlogService } from './../../blog-service/blog.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/blog-interface/post.interface';

@Component({
  selector: 'app-politic',
  templateUrl: './politic.component.html',
  styleUrls: ['./politic.component.scss']
})
export class PoliticComponent implements OnInit {
  politics:Post[]=[]
  title="politic"
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getPoliticList()
  }

  getPoliticList(){
    this.blogService.find$(`list`)
    .subscribe({
      next:(res)=>{
        this.politics=res.filter((e:any) => e.category == 'Politic');

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }

}

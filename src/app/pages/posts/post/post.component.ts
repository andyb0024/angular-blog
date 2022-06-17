import { BlogService } from './../../../blog-service/blog.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/blog-interface/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()posts:Post[]=[];
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.postList()
  }



  postList(){
    this.blogService.find$(`list`).subscribe({
      next:(res)=>{
        this.posts=res
        console.log(...this.posts);

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
}

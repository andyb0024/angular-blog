import { Post } from './../../blog-interface/post.interface';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog-service/blog.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  sports:Post[]=[]
  title="sport"
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getBusinessList()
  }

  getBusinessList(){
    this.blogService.find$(`list`)
    .subscribe({
      next:(res)=>{
        this.sports=res.filter((e:any) => e.category == 'Sport');

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }

}

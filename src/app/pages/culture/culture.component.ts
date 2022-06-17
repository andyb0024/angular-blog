import { Post } from './../../blog-interface/post.interface';
import { BlogService } from './../../blog-service/blog.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {

  constructor(private blogService:BlogService) { }
 @Input() cultures:Post[]=[];
 title="Culture"
  ngOnInit(): void {
    this.cultureList();
  }


  cultureList(){
    this.blogService.find$(`list`)
    .subscribe({
      next:(res)=>{
        this.cultures=res.filter((e:any) => e.category == 'Culture');

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
}

import { BlogService } from './../../../blog-service/blog.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/blog-interface/post.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  postdetails:Post|any
  constructor(private route: ActivatedRoute,private blogService:BlogService) { }

  ngOnInit(): void {
    this.postDetail()
  }


  postDetail():void{

    const slug = this.route.snapshot.params['slug'];
    this.blogService.find$(slug).subscribe((response:any)=>{
      this.postdetails=response
     console.log(response)
      })

   console.log("=>",slug);


  }
}

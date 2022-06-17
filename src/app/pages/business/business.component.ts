import { BlogService } from './../../blog-service/blog.service';
import { Post } from './../../blog-interface/post.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  businesses:Post[]=[]
  title="Business"
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
  this.getBusinessList()

  }

  getBusinessList(){
    this.blogService.find$(`list`)
    .subscribe({
      next:(res)=>{
        this.businesses=res.filter((e:any) => e.category == 'Business');

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
}

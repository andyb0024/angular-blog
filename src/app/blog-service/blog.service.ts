import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { any } from 'joi';
import { environment } from 'src/environments/environment';
import { BlogRepository } from '../repository/blog.repository';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BlogRepository<any> {

  constructor(
    protected override _http: HttpClient,
    protected override _router: Router,
  ) {
    super(_http, `${environment.baseUrl}post`, _router)
   }
}

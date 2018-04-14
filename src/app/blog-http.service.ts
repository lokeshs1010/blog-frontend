import { Injectable } from '@angular/core';
// importing http client to make http request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import observable related code
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  // tslint:disable-next-line:max-line-length
  private authToken = 'NDUwODA5YzMzODc1MGE1NWQ5ODhkMjdlMjM3MGFlYTNiZmE0NDdhZWY4YzYyMWRlZjhkNzNlNWY4ODhlZjcyYTBmM2VmZmFhYmUyNTBmOTNkM2NlYTMxOTA2MjQ3ZTZkMjE3OTFlZTAyNTQ2ZTljNjZiODAzZmViMGU1YWJmOWFiZg==';

  constructor(private _http: HttpClient) {
    console.log('blog-http service is called');
   }

   // exception handler
   private handleError(err: HttpErrorResponse) {
    console.log('Handle error Http calls');
    console.log(err.message);
    return Observable.throw(err.message);
  }

   // method to return all the blogs
  public getAllBlogs(): any {
    // tslint:disable-next-line:prefer-const
    let myResponse = this._http.get(this.baseUrl + '/all' + '?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  // method to return a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    return myResponse;

  }// end get blog information here

  createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;

  } // end create blog

  deleteBlog(blogId): any {

    let data = {};
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return myResponse;

  }// end delete blog

  editBlog(blogId, blogData): any {

    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
    return myResponse;

  }// end delete blog

}

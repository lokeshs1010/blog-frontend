import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  // declare a dummy variables here
  public allBlogs = [
    {
      'blogId': '1',
      'lastModified': '2017-10-20',
      'created': '2017-10-19',
      'tags': [],
      'author': 'admin',
      'category': 'comedy',
      'isPublished': true,
      'views': 0,
      'bodyHtml': 'this is blog body',
      'description': 'this is blog description',
      'title': 'this is blog 1'
    },
    {
      'blogId': '2',
      'lastModified': '2017-10-21',
      'created': '2017-10-20',
      'tags': [],
      'author': 'admin',
      'category': 'comedy',
      'isPublished': true,
      'views': 0,
      'bodyHtml': 'this is blog body',
      'description': 'this is example blog description',
      'title': 'this is an example blog'
    },
    {
      'blogId': '3',
      'lastModified': '2017-10-22',
      'created': '2017-10-21',
      'tags': [],
      'author': 'admin',
      'category': 'comedy',
      'isPublished': true,
      'views': 0,
      'bodyHtml': 'this is 3rd blog body',
      'description': 'this is 3rd blog description',
      'title': 'this is blog 3'
    }
  ];

  constructor() {
    console.log('service constructor called');
   }

  public currentBlog;
   // method to return all the blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  // method to return a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    // using a for of loop from typescript
    for ( let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }// end get blog information here


}

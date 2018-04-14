import { Component, OnInit, OnDestroy, ViewContainerRef  } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:max-line-length
  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService, private location: Location, private toastr: ToastsManager, vcr: ViewContainerRef) {
    console.log('view component constructor is called');
    this.toastr.setRootViewContainerRef(vcr);
  }

  // empty object
  public currentBlog;

  ngOnInit() {
    console.log('view component ngOnInit is called');
    // getting the blog id from route
    // tslint:disable-next-line:prefer-const
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    // calling the function to get the blog with this blogId out of the overall array
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data['data'];
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
  }

  deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog Deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);

      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }


    );




  }// end delete this blog

  goBackToPreviousPage(): any {

    this.location.back();

  }

  ngOnDestroy() {
    console.log('home component destroyed');
  }


}

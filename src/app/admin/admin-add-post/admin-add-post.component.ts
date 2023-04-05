import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddPostRequest } from 'src/app/models/add-post.model';
import { Post } from 'src/app/models/post.mode';
import { PostService } from 'src/app/servies/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.scss']
})
export class AdminAddPostComponent {
  constructor(private postService: PostService, private router: Router) {}

  post: AddPostRequest = {
    title: '',
    content: '',
    summary: '',
    urlHandle: '',
    author: '',
    visible: false,
    publishedDate: '',
    updatedDate: '',
    featuredImageUrl: ''
  };

  ngOnInit(): void {
  }

  onSubmit(): void {
    const addPostRequest: AddPostRequest = {
      author: this.post?.author,
      content: this.post?.content,
      summary: this.post?.summary,
      featuredImageUrl: this.post?.featuredImageUrl,
      publishedDate: this.post?.publishedDate,
      updatedDate: this.post?.updatedDate,
      title: this.post?.title,
      visible: this.post?.visible,
      urlHandle: this.post?.urlHandle,
    }
    this.postService.addPost(addPostRequest).subscribe(res => {
      alert('successful');
      console.log(res);
      this.router.navigate(['/admin/posts']);
    });
  }
}

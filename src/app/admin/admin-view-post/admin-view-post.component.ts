import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.mode';
import { UpdatePostRequest } from 'src/app/models/update-post.model';
import { PostService } from 'src/app/servies/post.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.scss']
})
export class AdminViewPostComponent {
  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {}

  post: Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=> {
      const id = params.get('id');
      if(id){
        this.postService.getPostById(id).subscribe(res => this.post = res)
      }
    })
  }

  onSubmit(): void {
    const updatePostRequest: UpdatePostRequest = {
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
    this.postService.updatePost(this.post?.id, updatePostRequest).subscribe(res => {
      alert('successful');
      this.post = res;
    });
  }

  deletePost(): void {
    this.postService.deletePost(this.post?.id).subscribe((res) => {
      console.log(res);
      alert('deleted successfully');
      this.router.navigate(['/admin/posts']);
    })
  }

}

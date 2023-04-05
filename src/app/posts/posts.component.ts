import { Component } from '@angular/core';
import { PostService } from '../servies/post.service';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  constructor(private postService: PostService) {}

  posts: Post[] = [];
  post : Post | undefined;

  ngOnInit() {
    this.postService.getAllPosts().subscribe(res => {
      this.posts = res
      this.post = res?.length > 0 ? res[0] : undefined;
    })
  }
}

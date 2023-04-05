import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.mode';
import { PostService } from 'src/app/servies/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent {

  constructor(private postSevice: PostService){}

  posts: Post[] = [];

  ngOnInit(): void {
    this.postSevice.getAllPosts().subscribe(res => this.posts = res)
  }
}

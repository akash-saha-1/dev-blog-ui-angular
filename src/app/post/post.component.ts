import { Component } from '@angular/core';
import { PostService } from '../servies/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(private postService: PostService, private route: ActivatedRoute) {}
  post : Post | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) this.postService.getPostById(id).subscribe(res => this.post = res)
    });
  }
}

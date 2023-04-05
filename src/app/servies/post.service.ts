import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../models/post.mode';
import { Observable } from 'rxjs';
import { UpdatePostRequest } from '../models/update-post.model';
import { AddPostRequest } from '../models/add-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiBaseUrl =  environment.apiBaseUrl;

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiBaseUrl}/api/posts`)
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiBaseUrl}/api/posts/${id}`)
  }

  addPost(addPostRequest: AddPostRequest): Observable<Post> {
    return this.http.post<Post>(`${this.apiBaseUrl}/api/posts/`, addPostRequest);
  }

  updatePost(id: string | undefined, updatePostRequest: UpdatePostRequest): Observable<Post> {
    return this.http.put<Post>(`${this.apiBaseUrl}/api/posts/${id}`, updatePostRequest, {headers: {}});
  }

  deletePost(id: string | undefined): Observable<Post> {
    return this.http.delete<Post>(`${this.apiBaseUrl}/api/posts/${id}`);
  }

}

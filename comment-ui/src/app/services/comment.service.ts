import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'https://localhost:7078/api/comment';
  
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addComment(message: string) {
    return this.http.post(this.apiUrl, { message });
  }
}
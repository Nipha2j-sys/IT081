import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html'
})
export class CommentComponent {

  message = '';
  comments: any[] = [];
  currentTime: string = '';

  constructor(private service: CommentService) {
    this.loadComments();

    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    this.currentTime = `${day} ${month} ${year} ${hours}:${minutes}`;
  }

  loadComments() {
    this.service.getComments().subscribe(res => {
      this.comments = res;
    });
  }

  sendComment() {
    if (!this.message.trim()) return;

    this.service.addComment(this.message).subscribe(() => {
      this.message = '';
      this.loadComments();
    });
  }

  onEnter(event: any) {
    if (event.key === 'Enter') {
      this.sendComment();
    }
  }
}
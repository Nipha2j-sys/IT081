import { Component } from '@angular/core';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
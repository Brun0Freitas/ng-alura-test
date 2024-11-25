import { Component } from '@angular/core';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';

@Component({
  selector: 'app-root',
  imports: [LikeWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public appLikes = 0;
  public appIncrementLike(): void {
    this.appLikes++;
  }
}

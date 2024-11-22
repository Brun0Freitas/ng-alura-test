import { Component } from '@angular/core';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';
import { UniqueIdService } from './shared/services/unique-id/unique-id.service';

@Component({
  selector: 'app-root',
  imports: [LikeWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public likes = 0;
  public like(): void {
    this.likes++;
  }
}

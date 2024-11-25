import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  imports: [FontAwesomeModule],
  templateUrl: './like-widget.component.html',
  styleUrl: './like-widget.component.css',
})
export class LikeWidgetComponent implements OnInit {
  @Output() public likedEvent = new EventEmitter<void>();
  @Input() public qtdLikes = 0;
  @Input() public id: string = null;
  public fonts = { faThumbsUp };

  constructor(private uniqueIdService: UniqueIdService) {}
  public ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdsWithPrefix('like-widget');
    }
    console.log(this.id);
  }

  public thumbsUpClicked(): void {
    this.likedEvent.emit();
  }
}

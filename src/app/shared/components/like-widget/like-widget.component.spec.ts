import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { EventEmitter } from '@angular/core';

describe('LikeWidgetComponent', () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    expect(component.id).toBeTruthy();
  });

  it('should NOT auto-generate ID during ngOnInit when (#Input id) is assigned', () => {
    const testId = 'someId';
    component.id = testId;
    expect(component.id).toBe(testId);
  });

  it('#likedEvent should trigger (@Output likedEvent) when called', () => {
    spyOn(component.likedEvent, 'emit');
    component.thumbsUpClicked();
    expect(component.likedEvent.emit).toHaveBeenCalled();
  });
});

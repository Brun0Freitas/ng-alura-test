import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`#like shoudl trigger (@Output liked) once when called multiple 
    times within debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let time = 0;
    component.liked.subscribe(() => time++);
    component.like();
    component.like();
    tick(500);
    expect(time).toBe(1);
  }));

  it(`like should trigger (#Output liked) two times when called 
    outside debounce time`, fakeAsync(() => {
    let time = 0;
    component.liked.subscribe(() => time++);
    component.like();
    tick(500);
    component.like();
    tick(500);
    expect(time).toBe(2);
  }));

  it(`(D) should display number of likes when (@Input likes) is incremented`, () => {
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1');
  });

  it(`(D) should have aria-label with 0 (@Input likes)`, () => {
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it(`(D) should update aria-label when (@Input likes) is incremented`, () => {
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it(`(D) should display image with src and description when bound to properties`, () => {
    const description = 'some description';
    const src = 'https://somesite.com/img.jgp';
    component.description = description;
    component.src = src;
    fixture.detectChanges();
    const img: HTMLElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('alt')).toBe(description);
    expect(img.getAttribute('src')).toBe(src);
  });
});

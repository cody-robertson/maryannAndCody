import {Component, HostListener, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-wedding-info',
  templateUrl: './wedding-info.component.html',
  styleUrls: ['./wedding-info.component.scss'],
  animations: [
    trigger('mapLoadState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class WeddingInfoComponent implements OnInit {
  show = false;
  mobile = false;

  ngOnInit() {
    this.mobile = window.screen.width < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = window.screen.width < 768;
  }

  showIframe() {
    console.log('Here!');
    this.show = true;
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

}

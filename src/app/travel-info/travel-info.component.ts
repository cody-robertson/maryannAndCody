import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-travel-info',
  templateUrl: './travel-info.component.html',
  styleUrls: ['./travel-info.component.scss'],
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
export class TravelInfoComponent implements OnInit {
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

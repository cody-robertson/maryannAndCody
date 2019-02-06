import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'The Wedding of Maryann and Cody';
  mobile = false;

  ngOnInit() {
    this.mobile = window.screen.width < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = window.screen.width < 768;
  }
}

import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
    try {
      setTimeout(() => {
        if (typeof $ !== 'undefined') {
          $('[data-widget="pushmenu"]').off('click').on('click', () => {
            $('body').toggleClass('sidebar-collapse');
          });
        }
      }, 0);
    } catch {}
  }
}

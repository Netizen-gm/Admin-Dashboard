import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout implements OnInit {
  ngOnInit() {
    this.loadTheme();
  }

  loadTheme() {
    const saved = localStorage.getItem('dashboardSettings');
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        if (settings.appearance && settings.appearance.theme) {
          this.applyTheme(settings.appearance.theme);
        }
      } catch (e) {
        console.error('Error loading settings:', e);
      }
    }
  }

  applyTheme(theme: string) {
    const body = document.body;
    const html = document.documentElement;

    body.classList.remove('theme-light', 'theme-dark', 'theme-auto');
    html.classList.remove('theme-light', 'theme-dark', 'theme-auto');

    if (theme === 'dark') {
      body.classList.add('theme-dark');
      html.classList.add('theme-dark');
    } else if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        body.classList.add('theme-dark');
        html.classList.add('theme-dark');
      } else {
        body.classList.add('theme-light');
        html.classList.add('theme-light');
      }
    } else {
      body.classList.add('theme-light');
      html.classList.add('theme-light');
    }
  }
}
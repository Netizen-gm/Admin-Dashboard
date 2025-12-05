import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuItems = [
    { path: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: 'contacts', label: 'Contacts', icon: 'users' },
    { path: 'products', label: 'Products', icon: 'package' },
    { path: 'reports', label: 'Reports', icon: 'reports' },
    { path: 'settings', label: 'Settings', icon: 'settings' }
  ];
}
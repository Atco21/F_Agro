import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // Esto es crucial si estás usando Angular Standalone Components
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }


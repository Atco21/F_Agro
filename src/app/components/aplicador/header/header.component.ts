import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // Esto es crucial si estás usando Angular Standalone Components
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[RouterLink]
})
export class HeaderComponent { }


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/state/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private authService: AuthService) { }
  name = '';

  ngOnInit() {
    this.name = this.authService.get().name;
  }
  
}

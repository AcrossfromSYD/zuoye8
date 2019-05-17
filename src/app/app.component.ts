import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syd10';
  constructor(private auth: AuthServiceService, private router: Router) {}
    loggout() {
      this.auth.logout();
      this.router.navigate(['./login']);
    }

  
}
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LogincallbackComponent implements OnInit {

  constructor(private cookie: CookieService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.completeAuthentication();
    const redirectUrl = this.cookie.get('redirectURL');

    if (redirectUrl && redirectUrl !== 'null') {
        this.cookie.delete('redirectURL');
        this.router.navigate([redirectUrl]);
    } else {
        this.router.navigate(['/']);
    }
  }

}

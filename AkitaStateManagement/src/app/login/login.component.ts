import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/state/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  submit() {
    let objLogin = {
      username: 'saeed.rezaei1@gmail.com',
      password: '123456'
    }

    this.authService.login(objLogin).subscribe({
      next: ({ name,token }) => {
        this.router.navigateByUrl('/user'); // successful login!
        console.log(` Welcome ${name} ${token} `)
      },
      error: (error) => { this.error = error.error.errorMsg; }
    });
  }

 
}

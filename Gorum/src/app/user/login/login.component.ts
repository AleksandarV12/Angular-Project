import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Handle login logic here, e.g., send credentials to server
    console.log('Login form submitted');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}

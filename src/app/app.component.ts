import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseUiComponent } from './components/base-ui/base-ui.component';
import { UsersComponent } from './pages/users/users.component';
import { UserService } from './services/user.service';
import { SpinnerComponent } from './components/spinner/spinner.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BaseUiComponent,
    UsersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'testes';

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    const user = localStorage.getItem('user');
    this.userService.setUser(user ? JSON.parse(user) : undefined);
  }

}

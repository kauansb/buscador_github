import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseUiComponent } from './components/base-ui/base-ui.component';
import { UsersComponent } from './pages/users/users.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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

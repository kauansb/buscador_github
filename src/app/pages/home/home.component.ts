import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { UserGit } from '../../models/userGit';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    SpinnerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  user: UserGit | undefined;
  username: string = '';
  error: string  | undefined;
  loading: boolean = false;

  constructor(private userService: UserService){}


  getGitUser(){
    this.loading = true;
    this.userService.getGitUser(this.username).subscribe(
      (response: UserGit) => {
        this.user = response;
        //console.log(response);
        this.loading = false
      }, 
      (error) => {
        //console.log(error.error.message);
        if (error.error.message === 'Not Found'){
          error.error.message = 'Usuário não encontrado';
          this.error = error.error.message;
        }else {
          this.error = 'Erro ao buscar o usuário';
        }
        //console.log(this.error);
        this.loading = false;
        this.autoCloseAlert();
      } 
    );
  }


  autoCloseAlert() {
    setTimeout(() => {
      this.error = '';
    }, 3000);
  }
}


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink, UserCardComponent, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  // users: String[] = ['Kauan','Marcelo'];
  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder, private userService: UserService){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){ // validação de campos
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(110)]],
    });
  }

  SubmitForm(){
    if(this.userForm.valid){
      // console.log(this.userForm.value);
      this.users.push(this.userForm.value)
      this.userForm.reset()
    }

  }

  users: User[] = [
    {
      nome: 'Kauan',
      idade: 20
    },
    {
      nome: 'Marchelo',
      idade: 50
    },
  ];

  infoUserSelecionado(user: User){
    this.userSelecionado = user;
    this.userService.setUser(user) // Disponibiliza usuário selecionado para todo o app
  }

}

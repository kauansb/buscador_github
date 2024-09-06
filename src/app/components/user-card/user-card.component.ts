import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User = { // @Input() captura valores dos objetos passados de outro componente
    idade: 0,
    nome: '',
  };


  @Output() userInfoEmitter = new EventEmitter<User>(); // Recupera os dados a partir do componente pai

  RetornarDados(){
    this.userInfoEmitter.emit(this.user)
  }
}

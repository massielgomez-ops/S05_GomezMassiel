import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  standalone: false,
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {

  nuevaTarea: string = '';
  errorMessage: string = '';

  @Output() tareaAgregada = new EventEmitter<string>();

  agregar() {
    if (this.nuevaTarea.trim() === '') {
      this.errorMessage = '❌ Por favor, escribe una tarea válida';
      return;
    }
    
    this.errorMessage = '';
    this.tareaAgregada.emit(this.nuevaTarea.trim());
    this.nuevaTarea = '';
  }
}
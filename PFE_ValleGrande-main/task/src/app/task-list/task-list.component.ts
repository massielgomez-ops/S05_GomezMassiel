import { Component, Input } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tareas: Task[] = [];
  @Input() onEliminar!: (id: number) => void;
  @Input() onToggleCompletada!: (id: number) => void;
}
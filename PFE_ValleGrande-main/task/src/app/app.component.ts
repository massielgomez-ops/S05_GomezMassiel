import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-root',
   standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tareas: Task[] = [];
  totalTareas: number = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tareas$.subscribe(tareas => {
      this.tareas = tareas;
      this.totalTareas = tareas.length;
    });
  }

  agregarTarea(nombre: string) {
    this.taskService.agregarTarea(nombre);
  }

  eliminarTarea(id: number) {
    this.taskService.eliminarTarea(id);
  }

  toggleCompletada(id: number) {
    this.taskService.toggleCompletada(id);
  }
}
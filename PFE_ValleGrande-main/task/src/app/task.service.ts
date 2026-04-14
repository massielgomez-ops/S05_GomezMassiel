import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  id: number;
  nombre: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tareasSubject = new BehaviorSubject<Task[]>([]);
  tareas$: Observable<Task[]> = this.tareasSubject.asObservable();
  private nextId = 1;

  constructor() {
    // Cargar tareas de ejemplo
    const tareasIniciales: Task[] = [
      { id: this.nextId++, nombre: 'Estudiar Angular', completada: false },
      { id: this.nextId++, nombre: 'Hacer tarea', completada: false },
      { id: this.nextId++, nombre: 'Comprar comida', completada: false },
      { id: this.nextId++, nombre: 'Lavar ropa', completada: false }
    ];
    this.tareasSubject.next(tareasIniciales);
  }

  agregarTarea(nombre: string): void {
    if (nombre && nombre.trim()) {
      const tareasActuales = this.tareasSubject.getValue();
      const nuevaTarea: Task = {
        id: this.nextId++,
        nombre: nombre.trim(),
        completada: false
      };
      this.tareasSubject.next([...tareasActuales, nuevaTarea]);
    }
  }

  eliminarTarea(id: number): void {
    const tareasActuales = this.tareasSubject.getValue();
    const tareasFiltradas = tareasActuales.filter(tarea => tarea.id !== id);
    this.tareasSubject.next(tareasFiltradas);
  }

  toggleCompletada(id: number): void {
    const tareasActuales = this.tareasSubject.getValue();
    const tareasActualizadas = tareasActuales.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    this.tareasSubject.next(tareasActualizadas);
  }

  getCantidadTareas(): number {
    return this.tareasSubject.getValue().length;
  }
}
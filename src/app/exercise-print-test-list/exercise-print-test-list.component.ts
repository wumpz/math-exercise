import { Component, OnInit } from '@angular/core';
import { Exercise, ExerciseService } from '../exercise.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-print-test-list',
  templateUrl: './exercise-print-test-list.component.html',
  styleUrls: ['./exercise-print-test-list.component.scss']
})
export class ExercisePrintTestListComponent implements OnInit { 
  constructor(private exerciseService: ExerciseService) {
  }
  
  ngOnInit(): void {
    this.refresh();
  }

  math_exercises: Exercise[] = [];

  refresh() {
    this.exerciseService.getNumExercises(4)
      .subscribe(exercises => this.math_exercises = exercises);
  }
}

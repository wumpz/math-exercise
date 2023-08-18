import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseTestListComponent } from './exercise-test-list/exercise-test-list.component';
import { StartHelpComponent } from './start-help/start-help.component';
import { ExercisePrintTestListComponent } from './exercise-print-test-list/exercise-print-test-list.component';
import { ExercisesComponent } from './exercises/exercises.component';

const routes: Routes = [
  { path: 'exercises/:group', component: ExercisesComponent, 
    children: [
      { path: 'list', component: ExerciseListComponent },
      { path: 'print-test', component: ExercisePrintTestListComponent },
      { path: 'test', component: ExerciseTestListComponent, data: { checkable : true} },
    ]
  },
  { path: '**', component: StartHelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
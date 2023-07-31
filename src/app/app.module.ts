import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayMathExampleComponent } from './display-math-example/display-math-example.component';
import { MathjaxModule } from "mathjax-angular";
import { ExerciseComponent } from './exercise/exercise.component';
import { FormsModule } from '@angular/forms';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseTestListComponent } from './exercise-test-list/exercise-test-list.component';
import { StartHelpComponent } from './start-help/start-help.component'

@NgModule({
  declarations: [
    AppComponent,
    DisplayMathExampleComponent,
    ExerciseComponent,
    ExerciseListComponent,
    ExerciseTestListComponent,
    StartHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathjaxModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

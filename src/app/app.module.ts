import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* components */
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component'

/* modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

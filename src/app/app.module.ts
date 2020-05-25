import { JwtInterceptor } from './Interceptors/jwt.interceptor';
import { NgModule } from '@angular/core';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Declarations
import { AppComponent } from './app.component';
import { ListComponent } from './Elements/Weakness/list/list.component';
import { AddComponent } from './Elements/Weakness/add/add.component';
import { EditComponent } from './Elements/Weakness/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

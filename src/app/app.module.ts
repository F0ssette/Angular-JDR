import { JwtInterceptor } from './Interceptors/jwt.interceptor';
import { NgModule } from '@angular/core';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Declarations
import { AppComponent } from './app.component';
import { ListComponent as WeakList} from './Elements/Weakness/list/list.component';
import { AddComponent as WeakAdd} from './Elements/Weakness/add/add.component';
import { EditComponent as WeakEdit} from './Elements/Weakness/edit/edit.component';
import { ListComponent as StoryList} from './Elements/Story/list/list.component';
import { AddComponent as StoryAdd} from './Elements/Story/add/add.component';
import { EditComponent as StoryEdit} from './Elements/Story/edit/edit.component';
import { ListComponent as PowerList} from './Elements/Power/list/list.component';
import { AddComponent as PowerAdd} from './Elements/Power/add/add.component';
import { EditComponent as PowerEdit} from './Elements/Power/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WeakList,
    WeakAdd,
    WeakEdit,
    StoryList,
    StoryAdd,
    StoryEdit,
    PowerList,
    PowerAdd,
    PowerEdit
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
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

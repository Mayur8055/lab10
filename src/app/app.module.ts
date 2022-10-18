import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { BlacklistPipe } from './blacklist.pipe';
import { SearchPipe } from './search.pipe';
import { UseSvcComponent } from './use-svc/use-svc.component';
import { UseHttpComponent } from './use-http/use-http.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FilterWordComponent,
    BlacklistPipe,
    SearchPipe,
    UseSvcComponent,
    UseHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

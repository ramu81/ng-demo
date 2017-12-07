import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './shared';
import { HttpModule } from '@angular/http';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule.forRoot(appRoutes)	
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

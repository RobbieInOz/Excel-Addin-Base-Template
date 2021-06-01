import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from '../../src/app/app.component';
import { FormatComponent } from '../../src/app/format/format.component';
// import { HomeComponent } from '../../src/app/home/home.component'

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'format', component: FormatComponent }
  // { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

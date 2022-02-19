import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //importing for routing functionality
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

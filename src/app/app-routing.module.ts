import { AddFormComponent } from './add-form/add-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            title: 'Home',
            component: HomeComponent,
          },
          {
            path: 'add',
            component: AddFormComponent,
          },
          {
            path: 'update/:id',
            component: UpdateFormComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

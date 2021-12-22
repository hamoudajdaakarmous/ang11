import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticleComponent } from './list-article/list-article.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AjoutComponent } from './ajout/ajout.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'add', component: AddArticleComponent },
  { path: 'ajout', component: AjoutComponent },
  { path: 'update/:id', component: UpdateArticleComponent},
  { path: 'list', component: ListArticleComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

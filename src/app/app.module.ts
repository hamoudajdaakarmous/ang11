//import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule,MatDialogRef, } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
//import { ArticleService } from '../_services/article.service';
//import { FormBuilder } from '@angular/forms';
//import {MatCheckboxModule} from '@angular/material/checkbox';
//import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
//import {NgForm  } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ToastrModule } from 'ngx-toastr';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AddArticleComponent } from './add-article/add-article.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { DatePipe } from '@angular/common';
import { UpdateArticleComponent } from './update-article/update-article.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddArticleComponent,
    AjoutComponent,
    ListArticleComponent,
    UpdateArticleComponent,
   // NgForm
   //FormBuilder,
   /// FormGroup, 
   // FormArray, 
   // FormControl, 
    //Validators,
    //ReactiveFormsModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule
  ],

  providers: [DatePipe,{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component,Inject,OnInit } from '@angular/core';
import { FormBuilder ,FormControl} from '@angular/forms';
import {Article} from '../models/article'
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from '../_services/article.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { AjoutComponent } from '../ajout/ajout.component';
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
 /// myimage:string="assets/plage.jpg"
  login!: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  control: FormControl = new FormControl('');
  constructor(public crudApi:ArticleService,
    private tokenStorageService: TokenStorageService,public toastr: ToastrService,
    private router : Router,public fb: FormBuilder,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef:MatDialogRef<AjoutComponent>
    
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
   
      
      this.login = user.login;
  }

  console.log(this.login)




  this.getData();


  
}

getData() {
  this.crudApi.getData(this.login).subscribe(
    response =>{this.crudApi.listData = response;
      console.log(response);
    }
    
   );
 
   
}
removeData(id: number ) {
  if (window.confirm('Are sure you want to delete this article?')) {
  this.crudApi.deleteData(id)
    .subscribe(
      data => {
        console.log(data);
        this.toastr.warning(''); 
        this.getData();
      },
      error => console.log(error));
}
}


/*
 updateData(id:any) {
  
 this.crudApi.dataForm = this.fb.group(Object.assign({},id));
  const dialogConfig = new MatDialogConfig();
 
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width="50%";
  
  
  this.crudApi.update(id,this.crudApi.dataForm.value);
  this.crudApi.update(id,this.crudApi.dataForm.value).
  subscribe( data => {
    this.matDialog.open(AjoutComponent, dialogConfig);
   
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
     );
  //  this.router.navigate(['/agents']); 
  });
}
/*updateData()
{
  this.crudApi.updatedata(this.crudApi.formData.value.id,this.crudApi.formData.value).
  subscribe( data => {
    this.dialogRef.close();
   
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.list = response;}
     );
    this.router.navigate(['/agents']); 
  });
}*/

updateArticle(id: number){
  this.router.navigate(["/update", id]);
}

}
 


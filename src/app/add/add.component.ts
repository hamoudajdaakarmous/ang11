
import { Component, OnInit,Inject } from '@angular/core';
import { ScategorieService} from '../_services/scategorie.service';
import { CategorieService} from '../_services/categorie.service';

import { ArticleService} from '../_services/article.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router } from '@angular/router';
import { Article} from '../model/article';
import { Categorie} from '../model/categorie';
import { Scategorie} from '../model/scategorie';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { AddArticleComponent } from '../add-article/add-article.component';
import { AddService } from '../_services/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  dataForm!: FormGroup;
  CategorieList?:Categorie[] ;
  ScategorieList: any;
  scategorie : any={};
  wcode : string = '';
  constructor(public crudApi: AddService ,public fb: FormBuilder,public toastr: ToastrService,
    public scategorieService: ScategorieService,
    public categorieService: CategorieService,
    private router : Router,@Inject(MAT_DIALOG_DATA) public data:any,
  // @Inject(MAT_DIALOG_DATA)  public data,
    public dialogRef:MatDialogRef<AddArticleComponent>,
    
    ) { }
    get f() { return this.dataForm.controls; }
  ngOnInit() {
  
    {this.infoForm()};
    this.categorieService.getAll().subscribe(
      response =>{this.CategorieList = response;}
     );
   }
  
  infoForm() {
    const fb = this.fb;
    this.dataForm = this.fb.group({
        id: null,
        code: ['', [Validators.required]],
        code_b: ['', [Validators.required]],
        libelle: ['', [Validators.required]],
        pa: [0, [Validators.required]],
        pv: [0, [Validators.required]],
        tva: [0, [Validators.required]],
        fodec: [0, [Validators.required]],
        stkinit: [0, [Validators.required]],
        code_categ: ['', [Validators.required]],
        code_scateg: ['', [Validators.required]],
        profile : [],
      });
    }

  ResetForm() {
      this.dataForm.reset();
  }
  onSubmit() {
   
      this.addData();
    
  
      
}
  
onSelectCateg(id_categ: string)
{
  this.scategorieService.listScateg(id_categ).subscribe(
    response =>{this.ScategorieList = response;}
   );  
} 

onSelectScateg(id_scateg: string)
{
 this.scategorieService.getData(id_scateg).subscribe(
    response =>{
      this.scategorie = response;
      this.wcode = (10000 + this.scategorie.rang).toString().substring(1);
      this.wcode = this.scategorie.id_categ+this.scategorie.code+this.wcode;
      
      }
   );  
} 

addData() {
  const formData = new  FormData();
  const article = this.dataForm.value;
  formData.append('article',JSON.stringify(article));
  
  this.crudApi.createData(formData).subscribe( data => {
  
    this.router.navigate(['/articles']); 
  });
}
  updateData()
  {
    this.crudApi.updatedata(this.dataForm.value.id,this.dataForm.value).
    subscribe( data => {
      this.dialogRef.close();
      this.router.navigate(['/articles']); 
    });
  }

}

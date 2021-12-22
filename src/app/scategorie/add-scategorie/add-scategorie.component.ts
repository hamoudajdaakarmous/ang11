
import { Component, OnInit,Inject} from '@angular/core';

import { CategorieService} from '../../_services/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }

from '@angular/forms';
import { Router } from '@angular/router';

import { Categorie} from '../../model/categorie';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
import { ScategorieService } from 'src/app/_services/scategorie.service';

@Component({
  selector: 'app-add-scategorie',
  templateUrl: './add-scategorie.component.html',
  styleUrls: ['./add-scategorie.component.css']
})
export class AddScategorieComponent implements OnInit {
  CategorieList?: Categorie[];
  dataForm!: FormGroup;
  constructor(public crudApi: ScategorieService ,public fb: FormBuilder,public toastr: ToastrService,
    
    public categorieService: CategorieService,
    private router : Router,@Inject(MAT_DIALOG_DATA)  public data:any,
    public dialogRef:MatDialogRef<AddScategorieComponent>,
    
    ) { }

  ngOnInit() {
  
    //if (this.crudApi.choixmenu == "A")
    this.infoForm();
    this.categorieService.getAll().subscribe(
      response =>{this.CategorieList = response;}
     );
   }


  
  infoForm() {
    this.dataForm = this.fb.group({
        id: null,
        code: ['', [Validators.required]],
        id_categ: ['', [Validators.required]],
        libelle: ['', [Validators.required]],
        rang: [1],
      });
    }
   
  

  ResetForm() {
      this.dataForm.reset();
  }
  onSubmit() {
   
  
      this.addData();
    
   
}
  
   

addData() {
  this.crudApi.createData(this.dataForm.value).
  subscribe( data => {
  //  this.dialogRef.close();
   
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
     );
   // this.router.navigate(['/scategories']); 
  });
}
  updateData()
  {
    this.crudApi.updatedata(this.dataForm.value.id,this.dataForm.value).
    subscribe( data => {
      this.dialogRef.close();
     
      this.crudApi.getAll().subscribe(
        response =>{this.crudApi.listData = response;}
       );
      this.router.navigate(['/scategories']); 
    });
  }


}

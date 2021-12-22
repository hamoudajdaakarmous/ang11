import { Component, OnInit,Inject} from '@angular/core';
import { CategorieService} from '../../_services/categorie.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }

from '@angular/forms';
import { Router } from '@angular/router';

import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  dataForm!: FormGroup;
 
  constructor(public crudApi: CategorieService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router,@Inject(MAT_DIALOG_DATA)  public data:any,
    public dialogRef:MatDialogRef<AddCategorieComponent>,
    ) { }

  ngOnInit() {
  
 
    {this.infoForm()};
   }


  
  infoForm() {
    this.dataForm = this.fb.group({
        id: null,
        code: ['', [Validators.required]],
        libelle: ['', [Validators.required]],
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
   // this.dialogRef.close();
   
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
     );
  //  this.router.navigate(['/categories']); 
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
      this.router.navigate(['/categories']);
    });
  }

}

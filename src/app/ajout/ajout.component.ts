import { Component, OnInit } from '@angular/core';
//import {NgForm  } from '@angular/forms'
//import { ReactiveFormsModule } from '@angular/forms';
//import { Article } from '../models/article';
//import { Article } from '../models/article';
import { ArticleService } from '../_services/article.service';
//import { FormBuilder,  FormArray, FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';
//import { ValueTransformer } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Router} from "@angular/router";
import { TokenStorageService } from '../_services/token-storage.service';
import { CategorieService } from '../_services/categorie.service';
import { ScategorieService } from '../_services/scategorie.service';
import { Categorie } from '../models/categorie';
@Component({
  selector: 'app-add-article',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],

})
export class AjoutComponent implements OnInit {


  CategorieList!: Categorie[];
  ScategorieList: any;
  scategorie : any={};
  wcode : string = '';
  addForm!: FormGroup;
  
  websiteList: any = [
    { id: 1, name: 'eclairage' },
    { id: 2, name: 'chemin goudronné' },
    { id: 3, name: 'trottoire ' },
    { id: 4, name: 'eau utilisé' },
    { id: 5, name: 'eau pluie ' }
  ];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  login?: string;
  code_commune?:string;
  public taux!:number ;
  public taxe!:number;
 public   str : string = '';
 public array : string[] = [];
 public str1 :string='';
 public surface!:number;
 public m!:string;
public categorie!:string;
Taxe !:number; 
z!:number;
y1!:number;
t!:number;
prix_reference!:number;
Montant_TIB!:number; 
 Montant_FNAH!:number;
//public date1 =Date.now();
public j!:number;
public k3!:number;
public k5!:number;
public x!:number;
  public article = {"prestation":""};
  public article1={"prestation2":""};
  public article2={"prestation3":""};
  public article3={"prestation4":""};
  public article4={"prestation5":""};
  currentUser: any;
  constructor(private articleService: ArticleService ,private router:Router, public scategorieService: ScategorieService,
    public categorieService: CategorieService,private fb: FormBuilder ,private tokenStorageService: TokenStorageService) {
  }
 

  onCheckboxChange(e:any, text : string) {
  
    if (e.target.checked) {
      this.array.push(text);
      this.str = this.array.join();
      this.article.prestation = this.str;
       var i=this.array.length
      this.x=1;
      console.log(this.str);
      //console.log(this.addForm.value.surface_couvert)
      console.log(i);
     
           if(i==1 )
              {
                 this.taux=0.08;
              }
           else if(i>=3 && i<=4)
              {
                this.taux=0.1
              }
            else if(i>=5 && i<=6){
              this.taux=0.12  
            }
            else if (i>6)
             {
               this.taux=0.14
             }
             var k = this.addForm.value.surface_couvert;
             if( k>0 && k<=100)
                 {;
                 this.prix_reference=150
               }
             else if (k>100 && k<=200)
                {;
                 this.prix_reference=200
               }    
             else if (k>200 && k<=400)
                  {
                   ;
                    this.prix_reference=250
                  }  
              else if (k>400 && k<1000)
                 {

                   this.prix_reference=300
                 }    
                 
                 this.y1=this.addForm.value.surface_couvert*this.taux*this.x*0.2;
                  this.t=this.addForm.value.surface_couvert*0.04*this.x*0.2;
                  this.taxe = this.y1+this.t;
                 this.m=this.categorie;
                 this.article2.prestation3=this.m;
                  this.x=this.prix_reference;
             
             // this.taxe=this.z;
              this.article4.prestation5=this.taxe.toString();
             // this.article1.prestation2=this.taxe.toString();
             this.j=this.taux;
              this.article1.prestation2=this.j.toString();
           //  this.article4.prestation5
    } else {
     return;
    }
    return this.str;
  }
  onSubmit1() {
    
        console.log(this.addForm.value.surface_couvert)
        const k = this.addForm.value.surface_couvert;
        if( k>0 && k<=100)
            {this.categorie='categorie 1';
           // this.prix_reference=150
          }
        else if (k>100 && k<=200)
           {this.categorie='categorie 2';
         //   this.prix_reference=200
          }    
        else if (k>200 && k<=400)
             {
               this.categorie='categorie 3';
           //    this.prix_reference=250
             }  
         else if (k>400 && k<1000)
            {
              this.categorie='categorie 4';
           //   this.prix_reference=300
            }    
            this.m=this.categorie;
            this.article2.prestation3=this.m;
        
  }
  onSubmit4() {
    
    console.log(this.addForm.value.surface_couvert)
    const k = this.addForm.value.surface_couvert;
    if( k>0 && k<=100)
        {;
        this.prix_reference=150
      }
    else if (k>100 && k<=200)
       {;
        this.prix_reference=200
      }    
    else if (k>200 && k<=400)
         {
          ;
           this.prix_reference=250
         }  
     else if (k>400 && k<1000)
        {
        
          this.prix_reference=300
        }    
        this.m=this.categorie;
        this.article2.prestation3=this.m;
    return this.prix_reference;
}
  onSubmit2() {
    this.taxe=0.02*this.addForm.value.surface_couvert*this.prix_reference;
   const k=this.taxe;
    console.log(k)
    //  this.k3=this.taxe;
   // this.article3.prestation4=this.k3.toString();
   
}
 /* onCheckboxChange1(e:any ) {
  
    if (e.target.checked) {
      //this.array.push(text);
      this.str = this.array.join();
      this.article.prestation = this.str;
       const i=this.array.length
      console.log(this.str);
      console.log(this.addForm.value.surface_couvert)
      console.log(i);
     
           if(i<=1)
              {
                 this.taux=0.08;
              }
           else if(i>=3 && i<=4)
              {
                this.taux=0.1
              }
            else if(i>=5 && i<=6){
              this.taux=0.12  
            }
            else
             {
               this.taux=0.14
             }
             this.j=this.taux;
              this.article1.prestation2=this.j.toString();
           
    } else {
     return;
    }
    return this.str;
  }*/
    
  


  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
   
      
      this.login = user.login;
      this.code_commune=user.username;

    }
    
    this.addForm = this.fb.group({
      id: [],
      
      code_article: ['', Validators.required],
      agent_saisie: this.login,
      'date_creation': new FormControl((new Date()).toISOString().substring(0,10)),
     // date_creation: this.date1,
      date_debut_imposition: ['', Validators.required],
      taux_prestation: this.article1.prestation2,
      categorie_TIB:this.article2.prestation3,
      surface_couvert:['', Validators.required],
      montant_taxe: this.article4.prestation5,
      code_commune: this.code_commune,
      date_dernier_maj: ['', Validators.required],
     // agent_de_controle: ['', Validators.required],
      prestation: this.article.prestation ,

    });
    this.array  = new Array<string>();
   
  }
 /* detectecategorie()
  {
     this.surface=this.addForm.value.surface_couvert
       const k =this.surface
       console.log(this.surface)
        if( k>0 && k<=100)
            {this.categorie=1;}
        else if (k>100 && k<=200)
           {this.categorie=2;}    
        else if (k>200 && k<=400)
             {
               this.categorie=3;
             }  
  }*/
  onSubmit() {
    this.articleService.addArticle(this.addForm.value)
    .subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        ///this.router.navigate(['/home']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
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
        //this.f['code'].setValue(this.wcode);
        }
     );  
  } 


  }

  /*onSubmit() {
    this.articleService.addArticle(this.addForm.value)
      .subscribe(data => {
        //this.router.navigate(['/home']);
      });*/
  //}




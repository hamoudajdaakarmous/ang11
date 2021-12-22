import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../_services/article.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
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
  public articlea = {"prestation":""};
  public article1={"prestation2":""};
  public article2={"prestation3":""};
  public article3={"prestation4":""};
  public article4={"prestation5":""};
  currentUser: any;
  id!: number;
  article!: Article;
  addForm!: FormGroup;
  a!:string;
  date2!: string;
 
 
 
  constructor(private route: ActivatedRoute,private router: Router,private fb: FormBuilder,private tokenStorageService: TokenStorageService
    ,private ApiService: ArticleService) { }
  
    onCheckboxChange(e:any, text : string) {
  
      if (e.target.checked) {
        this.array.push(text);
        this.str = this.array.join();
        this.articlea.prestation = this.str;
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
    currentDate() {
      const date_dernier_maj = new Date();
      this.date2= date_dernier_maj.toISOString().substring(0,10);
     
    }
  ngOnInit() {
    //const currentDate = new Date().toISOString().substring(0, 10);
   // this.addForm.controls['addForm'].setValue(currentDate)

    this.isLoggedIn = !!this.tokenStorageService.getToken();
   
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
   
      
      this.login = user.login;
  

    }
   
    this.a=this.categorie;
    this.addForm = this.fb.group({
      id: [],
      
      code_article: ['', Validators.required],
      agent_saisie: this.login,
      date_dernier_maj:this.date2,
     // date_creation: this.date1,
      date_debut_imposition: ['', Validators.required],
      taux_prestation: this.article1.prestation2,
     
      surface_couvert:['', Validators.required],
      categorie_TIB:['', Validators.required],
      montant_taxe: this.article4.prestation5,
     
 //  montant_taxe:  ['', Validators.required],
     // categorie_TIB:this.article3.prestation4,
     
      code_commune: this.code_commune,

     // agent_de_controle: ['', Validators.required],
   prestation: this.articlea.prestation ,
 //prestation:['', Validators.required],

    });
    this.array  = new Array<string>();
    this.article = new Article();

    this.id = this.route.snapshot.params['id'];
    
    this.ApiService.get(this.id)
      .subscribe(data => {
        console.log(data)
        this.article = data;
      }, error => console.log(error));
  }
  
    

  updateArticle() {
    this.ApiService.update(this.id, this.article)
      .subscribe(data => {
        console.log(data);
        this.article = new Article();
     //   this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateArticle();    
  }
  onSubmit2() {
    
    console.log(this.addForm.value.surface_couvert);
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
       //  this.prix_reference=300
        }    
       this.m=this.categorie;

      // this.article3.prestation4=this.m;
}

  
}
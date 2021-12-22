import { Injectable } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

import { Observable } from 'rxjs';
import { Article } from '../models/article';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


const baseUrl = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  listData !: any;
  isLoggedIn = false;
  login?: string;
  public dataForm!:  FormGroup; 
  baseurl1='http://localhost:8080/api/auth/larticles';
   baseUrl = 'http://localhost:8080/api/auth/add';
   baseurl2='http://localhost:8080/api/auth/articles';
  constructor(private http: HttpClient ,private tokenStorageService: TokenStorageService) { 
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
   
      
      this.login = user.login;
      

    }
    
  }
  addArticle(Article: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${this.login}`, Article);
  }
  listArticle(id: string): Observable<any> {
    return this.http.get(`${this.baseurl1}/${id}`);
  }
  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(baseUrl);
  }
  getAll1(): Observable<any> {
   
    return this.http.get(`${this.baseurl1}`);
  }
  
  getData(id: string): Observable<Article> {
    return this.http.get(`${this.baseurl1}/${id}`);
  }
  get(id: any): Observable<Article> {
    return this.http.get(`${this.baseurl2}/${id}`);
  }
  create(title:String,code_article:String,agent_saisie:String,date_creation:Date,date_debut_imposition:Date,taux_prestation:Number,
    categorie_TIB:String,surface_couvert:Number,montant_taxe:number,code_commune:String,prestations:String,agent_de_controle:String,date_dernier_maj:Date): Observable<any> {
    return this.http.post(baseUrl + 'add', {
      title,
      code_article,
      agent_saisie,
      date_creation ,
      date_debut_imposition,
      taux_prestation,
      categorie_TIB ,
      surface_couvert,
      montant_taxe ,
      code_commune ,
      prestations ,
       agent_de_controle ,
       date_dernier_maj 
  
    }, httpOptions);
  }
 /* create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }*/

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseurl2}/${id}`, data);
  }
 
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseurl2}/${id}`, { responseType: 'text' });
  }
 


  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Article[]> {
    return this.http.get<Article[]>(`${baseUrl}?title=${title}`);
  }
}

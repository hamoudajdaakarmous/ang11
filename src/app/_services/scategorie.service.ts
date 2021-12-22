import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Scategorie } from '../models/scategorie';

@Injectable({
  providedIn: 'root'
})
export class ScategorieService {

  private baseUrl = '/api/scategories';
  private baseUrl1 = '/api/scategories/5';
 
  listData !: Scategorie[];
  
  public addForm!:  FormGroup; 
  constructor(private http: HttpClient) { }


  
  listScateg(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }
 
  getData(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  updateRang(id: number, value: any): Observable<Object> {
      return this.http.patch(`${this.baseUrl1}/${id}`, value);
  }
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }
}

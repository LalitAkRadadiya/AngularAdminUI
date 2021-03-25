import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // readonly APIUrl = "https://lalitakradadiya.azurewebsites.net/api"

  readonly APIUrl = "http://localhost:3000/company"
  constructor(private http: HttpClient ) { }
  
 
  getList() :Observable<any[]> {
    return this.http.get<any>(this.APIUrl);
  }
  addList(val: any) {
    return this.http.post(this.APIUrl, val);
  }
  editList(val: any) {
    return this.http.put(this.APIUrl+'/'+val.id, val);
  }
  deleteList(id: any) {
    return this.http.delete(this.APIUrl +'/'+ id);
  }

}

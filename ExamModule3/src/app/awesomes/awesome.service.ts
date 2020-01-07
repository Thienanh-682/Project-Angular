import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IAwesome} from '../IAwesome';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  Url = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IAwesome[]> {
    return this.http.get<IAwesome[]>(this.Url);
  }

  add(awesome: IAwesome): Observable<IAwesome> {
    return this.http.post<IAwesome>(this.Url , awesome);
  }
  findById(id: number): Observable<IAwesome> {
    return this.http.get<IAwesome>(this.Url + '/' + id );
  }

  edit(awesome: IAwesome, id: number): Observable<IAwesome> {
    return this.http.put<IAwesome>(this.Url + '/' + id , awesome);
  }
  delete(id: number): Observable<IAwesome> {
    return this.http.delete<IAwesome>(this.Url + '/' + id );
  }
}

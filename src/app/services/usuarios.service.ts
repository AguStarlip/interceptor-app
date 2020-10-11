import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(){

    let params = new HttpParams().append('pages','1');
    params = params.append('nombre', 'Agustin Lipchak');

    return this.http.get('https://reqres.in/api/user', {params})
              .pipe(
                map((resp: { data }) => resp.data)
              )
  
  }
  
}
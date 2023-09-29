import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = "http://localhost/servicios/";
  constructor(private httpclient: HttpClient) { }

  iniciarSesion(nombreU: string, password: string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'nombreU='+nombreU +'&password=' + password;
    return this.httpclient.post(this.url + 'consultar_login.php', params, { headers });
  }

}

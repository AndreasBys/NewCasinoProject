import { Injectable } from '@angular/core';
import { environment} from 'src/app/environment'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Game } from '../_models/Game';

@Injectable({
  providedIn: 'root'
})
export class CasinoService {

  private readonly apiURL = environment.ApiURL + 'Game';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiURL);
  }
}

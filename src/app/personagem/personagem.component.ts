import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPersonagemResponse } from '../models/response/IPersonagemResponse';
import { Observable } from 'rxjs';
import { promises } from 'dns';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    console.log(await this.recuperarPersonagens());
  }

  async recuperarPersonagens(): Promise<IPersonagemResponse> {
    return await this.httpClient.get('https://rickandmortyapi.com/api/character').toPromise() as Promise<IPersonagemResponse>
  }
}

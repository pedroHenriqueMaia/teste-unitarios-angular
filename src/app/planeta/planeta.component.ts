import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPlanetaResponse } from '../models/response/IPlanetaResponse';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent {

  constructor(private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    console.log(await this.recuperarPlaneta());
  }

  async recuperarPlaneta(): Promise<IPlanetaResponse> {
    return await this.httpClient.get('https://rickandmortyapi.com/api/location').toPromise() as Promise<IPlanetaResponse>
  }

}

import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IPersonagemResponse } from '../models/response/IPersonagemResponse';

import { PersonagemComponent } from './personagem.component';

describe('PersonagemComponent', () => {
  let component: PersonagemComponent;
  let fixture: ComponentFixture<PersonagemComponent>;
  const mock: IPersonagemResponse = {
    info: {
      count: 1,
      next: '',
      pages: 1,
      prev: 1
    },
    results: [
      {
        id: 1,
        name:	'',
        status:	'',
        species:	'',
        type:	'',
        gender:	'',
        origin:	'',
        location:	'',
        image: '',
        episode: [''],
        url:	'',
        created:	''	
      }
    ]
  }
  const httpStub = {
    get: (params: any) => new Promise(() => mock)
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagemComponent ],
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('dve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar o httpClient', () => {
    spyOn(httpStub, 'get').and.callThrough();
    component.recuperarPersonagens();
    expect(httpStub.get).toHaveBeenCalled();
    expect(httpStub.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');
  });
});

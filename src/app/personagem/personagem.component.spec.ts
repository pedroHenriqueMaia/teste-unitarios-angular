import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PersonagemComponent } from './personagem.component';
import { HttpClient } from '@angular/common/http';

describe('PersonagemComponent', () => {
  let component: PersonagemComponent;
  let fixture: ComponentFixture<PersonagemComponent>;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagemComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemComponent);
    http = TestBed.inject(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar o httpClient', () => {
    spyOn(http, 'get').and.callThrough();
    component.recuperarPersonagens();
    expect(http.get).toHaveBeenCalled();
    expect(http.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');
  });
});

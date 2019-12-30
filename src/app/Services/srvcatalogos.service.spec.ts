import { TestBed } from '@angular/core/testing';
import { CrearCuentaComponent } from '../products/ahorro/crear-cuenta.component'
import { SrvcatalogosService } from './srvcatalogos.service';
import { SrvAccountsService } from './srv-accounts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { from } from 'rxjs';

describe('SrvcataogosService', () => {
  let component: CrearCuentaComponent;
  let service: SrvcatalogosService;
  let service1: SrvAccountsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
    service = new SrvcatalogosService(null);
    service1 = new SrvAccountsService(null);
    component = new CrearCuentaComponent(service1, service, null, null);
  });

  it('should be created', () => {
    const service: SrvcatalogosService = TestBed.get(SrvcatalogosService);
    expect(service).toBeTruthy();
  });

});

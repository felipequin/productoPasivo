import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import {AhorroComponent} from '../products/ahorro/ahorro.component'
import { SrvAccountsService } from './srv-accounts.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { from} from 'rxjs';


describe('SrvAccountsService', () => {
  let component: AhorroComponent;
  let service: SrvAccountsService;

  beforeEach(() => { TestBed.configureTestingModule({
    
    imports: [
      HttpClientTestingModule
  ]
  }).compileComponents();
  service = new SrvAccountsService(null);
  component = new AhorroComponent(service);
 
});


  it('should be created', () => {
    const service: SrvAccountsService = TestBed.get(SrvAccountsService);
    expect(service).toBeTruthy();
  });

  /* PRUEBA UNITARIA DE LLAMADO DE SERVICIO DE CONSULTA CUENTAS */
  it ('call service Accounts',() => {
   
         spyOn(service,"getAccounts").and.callFake(() => {
           return from([[{
             id: "1",
             tipoIdentitular: "C",
             Identitular: "1010174450",
             tipoCta: "PRO",
             saldo: "5000",
             ctaExonera: true,
             medioManejo: "tarjeta"
           }]])
         })
       
        component.ngOnInit();

        expect(component.accounts.length).toBe(1);
      });
    
});

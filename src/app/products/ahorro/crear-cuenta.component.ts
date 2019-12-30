import { Component, OnInit } from '@angular/core';
import {Account} from '../../models/account/account';
import { SrvAccountsService } from 'src/app/Services/srv-accounts.service';
import { SrvcatalogosService } from 'src/app/Services/srvcatalogos.service';
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import { TipoIdent } from 'src/app/models/domains/TipoIdent';
import { Tipocuenta } from 'src/app/models/domains/TipoCuenta';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss']
})
export class CrearCuentaComponent implements OnInit {
private account: Account = new Account();
 tipoidents : TipoIdent [];
 tipocuentas : Tipocuenta [];

//selectedValue = this.tipoident[0];
private title:string = "Crear Cuenta";
  constructor(private SrvAccountsService: SrvAccountsService, 
    private SrvcatalogosService: SrvcatalogosService, 
    private activatedRoute: ActivatedRoute,
  private router: Router) { }
  ngOnInit() {  
    //Cargar los dominios de los select
    //catalogo de tipos de identidad  
    this.SrvcatalogosService.getTypeIdents().subscribe(
    (response) => {
      this.tipoidents = response;
    }
  );
  //Catalogo de tipos de producto
  this.SrvcatalogosService.getTypeAccounts().subscribe(
    (response) => {
      this.tipocuentas = response;
    }
  );
  //cargar datos si la cuenta existe
  this.loadAccounts();
  }

  loadAccounts(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.SrvAccountsService.getAccount(id).subscribe( (account) => this.account = account)
      }
    })
  }

  public create():void {
    //SIMULAR LA ASIGNACION DE UN NUMERO DE CUENTA AL PRODUCTO APERTURADO.
    this.account.id = this.asignarNumero();
    this.SrvAccountsService.create(this.account).subscribe(account => {
      this.router.navigate(['/ahorro'])
      Swal.fire('Cuenta Aperturada', `la cuenta ${account.id} creado con éxito!`, 'success')
    }
    );
  }

  public update():void{
    this.SrvAccountsService.update(this.account)
    .subscribe( account => {
      this.router.navigate(['/ahorro'])
      Swal.fire('Cuenta ', `Nro ${account.id} Actualizada correctamente!`, 'success')
    })
}
asignarNumero(){
  return '641'+this.account.Identitular.substr(0,6)+this.aleatorio(1000000,9999999);
}

 aleatorio(a,b) {
  return Math.round(Math.random()*(b-a)+parseInt(a));
  }
}
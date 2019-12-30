import { Component, OnInit } from '@angular/core';
import { SrvAccountsService } from 'src/app/Services/srv-accounts.service';
import {Account} from '../../models/account/account';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.component.html',
  styleUrls: ['./ahorro.component.scss']
})
export class AhorroComponent implements OnInit {

  accounts: Account[];

  constructor(private SrvAccountsService: SrvAccountsService) { }

  ngOnInit() {
    //Cargar informacion de cuentas existentes
    this.SrvAccountsService.getAccounts().subscribe(
      (response) => {
        this.accounts = response;
      }
    );
  }

  public getAccount() {

  }

  public delete(account: Account): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la cuenta ${account.id} tipo ${account.tipoCta}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.SrvAccountsService.delete(account.id).subscribe(
          response => {
            this.accounts = this.accounts.filter(cli => cli !== account)
            Swal.fire(
              'Cuenta Eliminada!',
              `Cuenta  ${account.id} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
  

}

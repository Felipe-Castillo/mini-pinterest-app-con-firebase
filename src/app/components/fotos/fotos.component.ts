import { Component, OnInit } from '@angular/core';
import {CargaImagenesService} from '../../services/carga-imagenes.service';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  imagenes:FirebaseListObservable<any[]>;
  constructor( public _cargaImagenes:CargaImagenesService)
  {
    this.imagenes=this._cargaImagenes.listarUltimasImagenes(10);
  }

  ngOnInit() {
  }

}

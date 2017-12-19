import { Component, OnInit } from '@angular/core';
import {FileItem} from '../../models/file-item';
import {CargaImagenesService} from '../../services/carga-imagenes.service';
@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreDropZone:boolean=false;
  permiteCarga:boolean=true;

  archivos:FileItem[]=[];

  constructor(public _cargaImagenes:CargaImagenesService) { }

  ngOnInit() {
  }

  archivoSobreDropZone(e:boolean)
  {
    this.estaSobreDropZone=e;
  }

  cargaImagenesFirebase()
  {
    this.permiteCarga=false;
    this._cargaImagenes.cargar_imagenes_firebase(this.archivos);
  }

  

  limpiarArchivos()
  {
    this.archivos=[];
    this.permiteCarga=true;
  }

}

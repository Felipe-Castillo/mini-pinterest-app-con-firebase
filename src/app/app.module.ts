import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {app_routing} from './app.routes';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';



//constantes
import {firebaseConfig} from './config/firebase.config';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';


//servicios
import {CargaImagenesService} from './services/carga-imagenes.service';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    app_routing,
    AngularFireModule.initializeApp(firebaseConfig),

    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    AngularFireDatabase,
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

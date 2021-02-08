import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { DetailsComponent } from './details/details.component';
import { VolumeComponent } from './volume/volume.component';
import { ImpressionComponent } from './impression/impression.component';
import { DesignComponent } from './design/design.component';
import { ContactComponent } from './contact/contact.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


const routes: Routes = [
  { path: 'cotizar', component: SecondViewComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SecondViewComponent,
    BoxModelComponent,
    DetailsComponent,
    VolumeComponent,
    ImpressionComponent,
    DesignComponent,
    ContactComponent,
    FirstViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

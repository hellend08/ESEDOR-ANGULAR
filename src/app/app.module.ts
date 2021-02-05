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

const routes: Routes = [
  { path: 'cotizar', component: SecondViewComponent },
  { path: '', component: FirstViewComponent, pathMatch: 'full' }
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
    FirstViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

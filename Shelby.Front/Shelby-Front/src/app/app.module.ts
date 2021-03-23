import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingBarComponent } from './components/shopping-cart/shopping-bar/shopping-bar.component';
import { AdditionalBarComponent } from './components/shopping-cart/additional-bar/additional-bar.component';
import { CheckOutBarComponent } from './components/shared/footer/check-out-bar/check-out-bar.component';

const material = [
  MatExpansionModule,
  MatToolbarModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    ShoppingBarComponent,
    AdditionalBarComponent,
    CheckOutBarComponent
  ],
  imports: [[material],
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

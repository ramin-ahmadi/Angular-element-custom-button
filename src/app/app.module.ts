import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents : [
    CustomButtonComponent
  ],
  providers: [],
})
export class AppModule { 
  constructor(private injector : Injector){
  }

  ngDoBootstrap(){
    const el = createCustomElement(CustomButtonComponent, {injector : this.injector});
    customElements.define('custom-button',el);
  }
}

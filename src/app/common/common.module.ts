import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './loader/loaderinterceptor.service';
import { LogincallbackComponent } from './login-callback/login-callback.component';

@NgModule({
    declarations: [
        LoaderComponent,
        LogincallbackComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        LoaderComponent,
        LogincallbackComponent
    ],
    providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ]
})
export class CommonModule { }

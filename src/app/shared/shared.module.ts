import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { materials } from './angular-material/material-modules';
import { TextInputComponent } from './components/text-input/text-input.component';
import { SelectInputComponent } from './components/select-input/select-input.component';



@NgModule({
  declarations: [
    TextInputComponent,
    SelectInputComponent,
    SidebarComponent,
    HeaderComponent,

  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        ...materials,
    ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...materials,
    SidebarComponent,
    HeaderComponent,
    TextInputComponent,
    SelectInputComponent,
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule
    };
  }
}

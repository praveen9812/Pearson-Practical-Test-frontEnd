import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const mtComp=[
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
]

@NgModule({
  imports: [mtComp],
  exports:[mtComp]
})
export class MaterialModule { }

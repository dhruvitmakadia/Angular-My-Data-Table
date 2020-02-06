import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TableComponent } from './table/table.component';
import { PopUpModelComponent } from './pop-up-model/pop-up-model.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [TableComponent, PopUpModelComponent, SearchPipe, SortPipe],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    MatTableModule
  ],
  exports: [TableComponent, PopUpModelComponent]
})
export class SharedModule { }

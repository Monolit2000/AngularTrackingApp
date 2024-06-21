import { Component } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(private _dialog: MatDialog){}

  openAddEditEmpFrom(){
    this._dialog.open(AddItemComponent)
  }

}

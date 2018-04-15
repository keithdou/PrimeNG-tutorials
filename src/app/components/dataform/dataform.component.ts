import { Component } from '@angular/core';
import { DataformModel } from './dataformModel';

@Component({
  selector: 'app-table',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css'],
  providers: [DataformModel]
})

export class DataformComponent {

  constructor(private dataformModel : DataformModel) {}
}


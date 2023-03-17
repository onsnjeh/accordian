import { Component, Input} from '@angular/core';
import { DataService } from './data.service';

import { model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    {
  title = 'exemple';
  item1!: model;
  
 
  constructor(
    private service1: DataService,
   
  ) { }

  
 
 
  
 
   
  
}

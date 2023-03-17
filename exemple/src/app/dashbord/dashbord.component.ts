import { Component, Input } from '@angular/core';
import { model } from '../model';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  @Input() item!:model

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'exemple';
 
    id!: number;
    item: any;
  
    constructor(
      private route: ActivatedRoute,
      private dataService: DataService
    ) { }
  
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id !== null) {
          this.id = +id;
        }
                this.dataService.getItemById(this.id).subscribe(item => {
          this.item = item;
        });
      });
    }
  
}

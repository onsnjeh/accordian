import { Component ,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { model } from '../model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {
   id: number=1;
   item1:model={
			id: 0,
			role:'',
      url:''

		} ;

	constructor(private ser : DataService) {
    this.id=1
		this.item1 = {
			id: 0,
			role:'',
      url:''

		};
    
	}
	

 

  ngOnInit(): void {
    console.log(this.id);
    
    this.ser.getItemById(this.id).subscribe((res:any)=>
    {
      console.log(res)
      this.item1=res;
      console.log(this.item1);
      
    })

  }




}

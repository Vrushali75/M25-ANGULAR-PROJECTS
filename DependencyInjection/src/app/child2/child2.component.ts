import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  message: string | undefined;

  //child 2 is dependent on customer service
  constructor(private cs:CustomerService){
  }
  ngOnInit(): void{
    this.message=this.cs.display("TNS INDIA FOUNDATION")
  }
}

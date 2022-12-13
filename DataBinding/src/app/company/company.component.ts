import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  template:`<div>
  <p class="para">Hey Siri,Show me the Submit button</p>
  <button class="colorClass">Submit</button>
   
  </div>`,
  /*External template */
  //templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'] 
})
export class CompanyComponent {
  company: string="Capgemini";
  contact: string="Rekha";
  country: string="India";

  company1: string="Accenture";
  contact1: string="Vrushali";
  country1: string="Dubai";

}

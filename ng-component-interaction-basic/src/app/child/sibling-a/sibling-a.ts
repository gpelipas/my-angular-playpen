import { Component } from '@angular/core';

import { SharedService } from '../../shared';  

@Component({
  selector: 'app-sibling-a',
  imports: [],
  templateUrl: './sibling-a.html',
  styleUrl: './sibling-a.css',
})
export class SiblingAComponent {

  constructor(private sharedService: SharedService) {}  
 
  sendToSiblingB(): void {  
    this.sharedService.triggerFunction('Hello from Sibling A!');  
  } 


}

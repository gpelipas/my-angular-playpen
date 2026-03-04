import { Component, OnInit, OnDestroy } from '@angular/core';  
import { SharedService } from '../../shared'; 
import { Subscription } from 'rxjs';  

@Component({
  selector: 'app-sibling-b',
  imports: [],
  templateUrl: './sibling-b.html',
  styleUrl: './sibling-b.css',
})
export class SiblingBComponent implements OnInit, OnDestroy {  
  message = '';  
  private subscription!: Subscription;  
 
  constructor(private sharedService: SharedService) {}  
 
  ngOnInit(): void {  
    // Subscribe to the shared service's observable  
    this.subscription = this.sharedService.functionCall$.subscribe((message) => {  
      this.handleFunctionCall(message); // Call local function  
    });  
  }  
 
  // Local function to execute when event is received  
  private handleFunctionCall(message: string): void {  
    this.message = message;  
    console.log('Sibling B function called with:', message);  
  }  
 
  // Unsubscribe to prevent memory leaks  
  ngOnDestroy(): void {  
    this.subscription.unsubscribe();  
  }  
} 
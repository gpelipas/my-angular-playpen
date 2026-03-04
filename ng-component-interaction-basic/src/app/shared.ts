import { Injectable } from '@angular/core';  
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Private Subject to emit events (only service can emit)  
  private functionCallSubject = new Subject<string>();  
 
  // Public Observable for components to subscribe to  
  functionCall$: Observable<string> = this.functionCallSubject.asObservable();  
 
  // Method to trigger the function call (called by sender component)  
  triggerFunction(message: string): void {  
    this.functionCallSubject.next(message); // Emit the message  
  }   
}

import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl : './child.html'
})

export class ChildComponent {
  message: string = 'Hello from Child!';
  @ViewChild('childInput') childInput!: ElementRef<HTMLInputElement>;

  @Output() saveRequest = new EventEmitter<string>();
  
  inputValue = '';

  changeMessage(mewMessage : string = "") {
    this.message = mewMessage;
  }

  focusInput() {
    this.childInput.nativeElement.focus();
  }

  // Emit event when button is clicked  
  notifyParent(): void {  
    const data = 'Default data from child'; // Optional: pass data to parent  
    this.saveRequest.emit(this.inputValue ? this.inputValue : data); // Emit the event  
  }  

}
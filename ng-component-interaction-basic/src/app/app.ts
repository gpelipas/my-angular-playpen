import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { ChildComponent } from './child/child';
import { SiblingAComponent } from './child/sibling-a/sibling-a';
import { SiblingBComponent } from './child/sibling-b/sibling-b';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, CommonModule, FormsModule, SiblingAComponent, SiblingBComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // protected readonly title = signal('angular-viewchild-demo');

  parentInputValue? : string;

  savedData?: string; 
  
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  @ViewChild('parentInput') parentInput!: ElementRef<HTMLInputElement>;

  focusParentInput() {
    this.parentInput.nativeElement.focus();
  }
  
  focusChildInput() {
    this.childComponent.focusInput();
  }

  callChildMethod() {
    if (this.childComponent) {
      this.childComponent.changeMessage(this.parentInputValue);
    }
  }

  // Function to be called when child emits saveRequest  
  handleSave(dataFromChild: string): void {  
    this.savedData = dataFromChild;  
    console.log('Parent saved data:', dataFromChild);  
    // Add logic here (e.g., API call to save data)  
  }  

}

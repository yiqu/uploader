import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[enterEscapeKeyEvent]'
})
export class EnterEscapeKeyEventDirective {

  @HostListener('document:keyup.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.enterEscapeKeyEvent.emit(KeyEvent.ESCAPE);
  }

  @HostListener('document:keyup.enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    this.enterEscapeKeyEvent.emit(KeyEvent.ENTER);
  }

  @Output()
  enterEscapeKeyEvent: EventEmitter<KeyEvent> = new EventEmitter<KeyEvent>();

  constructor() {
  }
}

export enum KeyEvent {
  ENTER = 'Enter',
  ESCAPE = 'Escape'
}

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements AfterViewInit {


  @ViewChild('inputName') input: ElementRef;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.input.nativeElement.value = 'Angular Example';
  }



}

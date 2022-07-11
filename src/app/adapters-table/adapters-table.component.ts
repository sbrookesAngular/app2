import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

declare var generalTabRenderer: any;

@Component({
  selector: 'app-adapters-table',
  templateUrl: './adapters-table.component.html',
  styleUrls: ['./adapters-table.component.css']
})

export class AdaptersTableComponent implements OnInit {

  faCoffee = faCoffee;
  faGear = faGear;
  faInfoCircle = faInfoCircle;
  faCircleArrowDown = faCircleArrowDown;
  faArrowRotateRight = faArrowRotateRight;
  faCircleCheck = faCircleCheck;
  faCircleQuestion = faCircleQuestion;

  adapters = [{name: 'Intel(R) Ethernet Server Adapter I350-F4', status: 'Enabled'}, {name: 'Intel(R) Ethernet Server Adapter I350-F4 #2', status: 'Enabled'}, {name: ' Intel(R) Ethernet Server Adapter I350-F4 #3', status: 'Enabled'}, {name: 'Intel(R) Ethernet Server Adapter I350-F4 #4', status: 'Disabled'}, {name: 'Intel(R) Ethernet Server Adapter I350-F4 #5', status: 'Down'}]

  adapter = '';

  @Output() messageEvent = new EventEmitter<string>();

  /*-- 
  adapterSelector(x) gets adapter.name => changes {{adapter}} in app.comonents.html
  and ties into general-tab.components.ts/.html
  --*/

  //need to tie in adapterSelector() -> Data.ts/DataInterface.ts/general-tab.comonents
  adapterSelector(x){

    this.adapter = x;

    this.messageEvent.emit(this.adapter); 

  }

  constructor() { }

  ngOnInit(): void {
  }

}
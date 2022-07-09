import { Component, OnInit } from '@angular/core';
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

  adapters = [{name: 'Intel(R) Ethernet Server Adapter I350-F4', status: 'Enabled'}, {name: 'Intel(R) Ethernet Server Adapter I350-F4 #2', status: 'Enabled'}, {name: ' Intel(R) Ethernet Server Adapter I350-F4 #3', status: 'Enabled'}, {name: 'Intel(R) Ethernet Server Adapter I350-F4 #4', status: 'Disabled'}]

  constructor() { }

  ngOnInit(): void {
  }

}

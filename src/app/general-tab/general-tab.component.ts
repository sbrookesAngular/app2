import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import { AdaptersTableComponent } from '../adapters-table/adapters-table.component';

import { DataInterface }from '../DataInterface';
import { ADAPTERDATA } from '../Data';
import { ADAPTERDATA2 } from '../Data2';


//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

@Component({
  selector: 'app-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.css']
})

export class GeneralTabComponent implements OnInit {

  //for associated {{adapter}} in general-tab.compent.html imput from adapterSelector(x)
  // in adapters-table.ts
  @Input() adapter;
  

  /* -- Font Awesome START -- */
  faCoffee = faCoffee;
  faGear = faGear;
  faInfoCircle = faInfoCircle;
  faCircleArrowDown = faCircleArrowDown;
  faArrowRotateRight = faArrowRotateRight;
  faCircleCheck = faCircleCheck;
  faCircleQuestion = faCircleQuestion;
  /* -- Font Awesome END -- */

  /* -- for HELP SECTION expand/collapse (old school JS)  START -- */
  helpExpanded = false;

  expandHelp(){

    //document.getElementById() && 
    //document.getElementByClassName() shorteners
    // in scr/assets/js/global.js
    new _();
    new _c();

    this.helpExpanded = true;

    //help info mock-up help expander
    //mobile-responsive
    let tabContainersState = _("expTabCols").getAttribute("class");
    let helpContainerState = _("expHelpCol").getAttribute("class");
    let helpContent = _('expHelpContent');


    if(helpContainerState == "col-3 col-md-3 col-lg-3 ht_16"){
      //open help

      _("expTabCols").setAttribute("class", "col-5 col-md-7 col-lg-7");
      _("expHelpCol").setAttribute("class", "col-7 col-md-5 col-lg-5 ht_16");
      _('expHelpContent').style.display = "block";

    }else{
      //close help

      _("expTabCols").setAttribute("class", "col-9 col-md-9 col-lg-9");
      _("expHelpCol").setAttribute("class", "col-3 col-md-3 col-lg-3 ht_16");
      _('expHelpContent').style.display = "none";

    }

  }
  /* -- for HELP SECTION expand/collapse (old school JS)  END -- */

  /* -- adapter data model/controller START -- */
//https://angular.io/tutorial/toh-pt2
  //pulls in adapter information 
  //need to tie in adapterSelector() <--> Data.ts/DataInterface.ts/general-tab.comonents

  //only one object
  //adapterData: DataInterface[] = ADAPTERDATA;

  //multiple object; iterates thru entire object array
  //need to figure out how to select associated adapter and data object
  //by adapterName: ??
  adapterData: DataInterface[] = ADAPTERDATA2;
  testSelected = 'Intel(R) Ethernet Server Adapter I350-F4';

  // selectedAdapter = this.adapterData.filter(function(selected){

  //     return selected.adapterName === this.adapter;

  // });

  
  /* -- adapter data model/controller END -- */

  constructor() { }

  ngOnInit(): void {
  }

}

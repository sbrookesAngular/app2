import { Component, Input, Output, EventEmitter } from '@angular/core';
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

//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

@Component({
  selector: 'app-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.css']
})

export class GeneralTabComponent {

  //for associated {{adapter}} in general-tab.compent.html imput from adapterSelector(x)
  // in adapters-table.ts

  @Input() adapter: string;

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

  //pulls in adapter information 
   //need to tie in adapterSelector() <--> Data.ts/DataInterface.ts/general-tab.comonents
  adapterData: DataInterface[] = ADAPTERDATA;

  /* -- adapter data model/controller END -- */

  constructor() { }

  ngOnInit(): void {
  }




  //grepping stuff below...
  //sharing data between components
  //https://www.youtube.com/watch?v=I317BhehZKM


  /* -- CONDITIONAL TO RENDER ASSOCIATED ADAPTER-DATA -- */
  // adapters = [{name: 'Intel(R) Ethernet Server Adapter I350-F4', status: 'Enabled'}, {name: 'Intel(R) Ethernet Server Adapter I350-F4 #2', status: 'Enabled'}, {name: ' Intel(R) Ethernet Server Adapter I350-F4 #3', status: 'Enabled'}, {name: 'Intel(R) Ethernet Server Adapter I350-F4 #4', status: 'Disabled'}, {name: 'Intel(R) Ethernet Server Adapter I350-F4 #5', status: 'Down'}]

  // kvpairsX = [{key: 'Bus Type', val: 'PCI Express'}]
  // helpInfoX = `Lorem Ipsum`;
  /* -- CONDITIONAL TO RENDER ASSOCIATED ADAPTER-DATA -- */

  // @Output() messageEvent = new EventEmitter<string>();

  // adapter = '';

  // recAdapterSelected($event){

  //   this.adapter = $event;

  //   this.generalTabRender(this.adapter)
  //   //console.log("app.component: " + this.adapter);
  // }

  // @Output() messageEvent = new EventEmitter<string>();

  // adapterShared = '';

  // recAdapterSelected($event){

  //   this.adapter = $event;
  //   //console.log("app.component: " + this.adapter);
  // }

  // kvpairs = [{key: 'Bus Type', val: 'PCI Express'}, {key: 'Driver Name', val: 'elrexpress'}, {key: 'Driver Version', val: '12.18.11.0'}, {key: 'ETrackID', val: '0x80000584'}, {key: 'Location', val: 'PCI Bus 130, device 0, function 0'}, {key: 'Media Type', val: 'Fiber'}, {key: 'Negotiated Link Speed', val: 'Not Supported'}, {key: 'Negotiated Link Width', val: '4x'}, {key: 'Part Number', val: 'G15811-002'}, {key: 'Permanent Ethernet Address', val: '001B21A4BE0'}, {key: 'Port', val: 'A'}]

  // helpInfo = `This tab displays relevant detailed information about the currently selected adapter.
  // <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;



}

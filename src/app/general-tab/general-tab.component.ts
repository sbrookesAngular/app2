import { Component} from '@angular/core';
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
  selector: 'app-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.css']
})
export class GeneralTabComponent {

  faCoffee = faCoffee;
  faGear = faGear;
  faInfoCircle = faInfoCircle;
  faCircleArrowDown = faCircleArrowDown;
  faArrowRotateRight = faArrowRotateRight;
  faCircleCheck = faCircleCheck;
  faCircleQuestion = faCircleQuestion;

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

  kvpairs = [{key: 'Bus Type', val: 'PCI Express'}, {key: 'Driver Name', val: 'elrexpress'}, {key: 'Driver Version', val: '12.18.11.0'}, {key: 'ETrackID', val: '0x80000584'}, {key: 'Location', val: 'PCI Bus 130, device 0, function 0'}, {key: 'Media Type', val: 'Fiber'}, {key: 'Negotiated Link Speed', val: 'Not Supported'}, {key: 'Negotiated Link Width', val: '4x'}, {key: 'Part Number', val: 'G15811-002'}, {key: 'Permanent Ethernet Address', val: '001B21A4BE0'}, {key: 'Port', val: 'A'}]

  helpInfo = `This tab displays relevant detailed information about the currently selected adapter.
  <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  constructor() { }

  ngOnInit(): void {
  }

}

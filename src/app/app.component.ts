import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import { NavbarComponent} from './navbar/navbar.component';
import { AdaptersTableComponent } from './adapters-table/adapters-table.component';


//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app2';
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

  @Output() messageEvent = new EventEmitter<string>();

  adapter = '';

  recAdapterSelected($event){

    this.adapter = $event;
    //console.log("app.component: " + this.adapter);
  }
  
}
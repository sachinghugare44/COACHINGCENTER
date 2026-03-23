import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from "@ionic/angular";

@Component({
  selector: 'app-hamberger-menu',
  templateUrl: './hamberger-menu.component.html',
  imports: [IonicModule],
  styleUrls: ['./hamberger-menu.component.scss'],
})
export class HambergerMenuComponent  implements OnInit {

  constructor(private route:Router,private menu: MenuController) { }
@Output() menuAction = new EventEmitter<string>(); 
  ngOnInit() {}
onclickresult(){
  this.route.navigate([('/results')])
   this.menu.close("mainMenu");
}
onclickresulthome(){
  this.route.navigate([('/home')])
   this.menu.close("mainMenu");
}
goToAbout() {
    this.menuAction.emit('about');
    // this.scrollService.triggerScroll('about');    // sending section id to home page
  }

  goToServices() {
    this.menuAction.emit('services');
    // this.scrollService.triggerScroll('services'); 
  }
}

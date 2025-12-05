import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from "@ionic/angular";
import { IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-hamberger-menu',
  templateUrl: './hamberger-menu.component.html',
  imports: [IonicModule],
  styleUrls: ['./hamberger-menu.component.scss'],
})
export class HambergerMenuComponent  implements OnInit {

  constructor(private route:Router,private menu: MenuController) { }

  ngOnInit() {}
onclickresult(){
  this.route.navigate([('/results')])
   this.menu.close("mainMenu");
}
onclickresulthome(){
  this.route.navigate([('/home')])
   this.menu.close("mainMenu");
}
}

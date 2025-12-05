import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonTitle, IonContent, IonToolbar, IonCol, IonRow, IonButton, IonIcon, IonText, IonButtons, IonMenuButton } from "@ionic/angular/standalone";
import { IonicModule, MenuController } from "@ionic/angular";
import { HambergerMenuComponent } from '../hamberger-menu/hamberger-menu.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
standalone: true,
  imports: [IonicModule,HambergerMenuComponent]
})
export class ResultsPage implements OnInit {

  constructor(private route :Router,private menuCtrl:MenuController) { }

  ngOnInit() {
  }
 openMenu() {
  this.menuCtrl.open('mainMenu');
}
   scrollToSection(section: string): void {
    const sections: string[] = ["service", "about", "contact"];
    // console.log(section)
    
    const nextSectionIndex = sections.indexOf(section) + 1;
    if (nextSectionIndex < sections.length) {
      const nextSection = document.getElementById(sections[nextSectionIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // console.error(`Section with id '${sections[nextSectionIndex]}' not found`);
      }
    } else {
      // console.log("No next section available");
    }
  }
  onScroll(event: any) {
   
    // console.log(event)
    // const scrollElement = event.target;
    // const scrollTop = scrollElement.scrollTop;
    // console.log(scrollTop)
    // const scrollHeight = scrollElement.scrollHeight;
    // console.log(scrollHeight)
    // const offsetHeight = scrollElement.offsetHeight;
    // console.log(offsetHeight)
    // this.isBottomReached = scrollTop + offsetHeight >= scrollHeight;
    // console.log(this.isBottomReached)
    const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        // console.log(scrollPosition)
        // console.log(pageHeight)
        if (scrollPosition >= pageHeight) {
          // console.log('You have reached the bottom of the page!');
          // Add your logic here when the user reaches the bottom
        }
  }

  scrollToSection1(sectionId: string): void {
    // console.log(sectionId)
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
onclickresult(){
  this.route.navigate([('/results')])
}
onclickresulthome(){
  this.route.navigate([('/home')])
}
phoneNumber = '8888388625';
  callPhoneNumber() {
    window.location.href = `tel:${this.phoneNumber}`;
  }
}

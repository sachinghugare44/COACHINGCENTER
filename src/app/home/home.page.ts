import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonText, IonRow, IonCol, IonFooter, IonCard, IonIcon, IonButton, IonFab, IonFabButton } from "@ionic/angular/standalone";
import { interval, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {Swiper} from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonButton, IonIcon, IonCard, IonFooter, IonCol, IonRow, IonText, IonTitle, IonContent, IonToolbar, IonHeader]
})
export class HomePage implements OnInit {

  // @ViewChild('swiper')
  // swiperRef: ElementRef | undefined;
  // swiper?: Swiper;
 
  // // view selected img swiper
  // viewSelectedImage(index:number) {
  //   this.swiper?.slideTo(index);
  // }
 
  // swiperSlideChanged(e: any) { }
 
  // swiperReady() {
  //   this.swiper = this.swiperRef?.nativeElement.swiper;
  // }
 
  private speed = 50;
  counters = [0, 4600, 1700, 900];
  endNbr = [20, 4737, 1799, 934];
 
  @ViewChild('divSection', { static: true })
  divSection!: ElementRef;
  private observer!: IntersectionObserver;
  constructor(private http:HttpClient) { }
private baseUrl = environment.apiUrl
  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.animateCounters();
        this.observer.disconnect(); // Stop observing once triggered
      }
    });

    this.observer.observe(this.divSection.nativeElement);
    this.createUser();
  }arradydata:any

  createUser(): Observable<any> {
    debugger
    return this.http.get(`${this.baseUrl}/api/ipltimetablecontoller/getAlltimetable`).pipe(
    tap(data => {
      console.log('Fetched Users from API:', data);
    })
  ); ``
  
   
  }
 animateCounters() {
    const interval$ = interval(this.speed);

    interval$.subscribe(() => {
      this.counters = this.counters.map((counter, index) => {
        return Math.min(counter + 1, this.endNbr[index]);
      });
    });
  }

  

   scrollToSection(section: string): void {
    const sections: string[] = ["service", "about", "contact"];
    console.log(section)
    
    const nextSectionIndex = sections.indexOf(section) + 1;
    if (nextSectionIndex < sections.length) {
      const nextSection = document.getElementById(sections[nextSectionIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error(`Section with id '${sections[nextSectionIndex]}' not found`);
      }
    } else {
      console.log("No next section available");
    }
  }
  

  scrollToSection1(sectionId: string): void {
    console.log(sectionId)
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// @HostListener('window:scroll', [])
//   onScroll(): void {
//     const scrollPosition = window.innerHeight + window.scrollY;
//     const pageHeight = document.documentElement.scrollHeight;

//     if (scrollPosition >= pageHeight) {
//       console.log('You have reached the bottom of the page!');
//       // Add your logic here when the user reaches the bottom
//     }
//   }

  isBottomReached = false;

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
        console.log(scrollPosition)
        console.log(pageHeight)
        if (scrollPosition >= pageHeight) {
          console.log('You have reached the bottom of the page!');
          // Add your logic here when the user reaches the bottom
        }
  }
}


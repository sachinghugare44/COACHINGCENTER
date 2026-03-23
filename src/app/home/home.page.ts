import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@capacitor/network';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonText, IonRow, IonCol, IonFooter, IonCard, IonIcon, IonButton, IonFab, IonFabButton, IonLabel, IonItem, IonList, IonBadge, IonMenuButton, IonButtons, IonInput, IonSelectOption, IonTextarea, IonSelect } from "@ionic/angular/standalone";
import { interval, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HambergerMenuComponent } from '../hamberger-menu/hamberger-menu.component';
import { MenuController, ToastController, IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';

interface Memory {
  id: number;
  imageUrl: string;
  title: string;
  date?: string;
  description?: string;
}
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule,FormsModule,
    ReactiveFormsModule,CommonModule]
  // imports: [ReactiveFormsModule,IonicModule,
  //   CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  

  @ViewChild(IonContent)
 content: IonContent | undefined;

  API_URL = "https://script.google.com/macros/s/AKfycbxnTaRKVDmkrjT2qRwQYCS91r3OOkFEtaK99wC4aF25xdcajAIBOKOz_R_d5OOd7gDy/exec";


  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
 
  // view selected img swiper
  // viewSelectedImage(index:number) {
  //   this.swiper?.slideTo(index);
  // }
 
  // swiperSlideChanged(e: any) { }
 
  // swiperReady() {
  //   this.swiper = this.swiperRef?.nativeElement.swiper;
  // }
  // @ViewChild('swiper')
  // swiperRef: ElementRef | undefined;
  // swiper?: Swiper;

  // viewSelectedImage(index: number) {
  //   this.swiper?.slideTo(index);
  // }

  // swiperSlideChanged(e: any) {}

  // swiperReady() {
  //   this.swiper = this.swiperRef?.nativeElement.swiper;
  // }

  // goNext() {
  //   this.swiper?.slideNext();
  // }

  // goPrev() {
  //   this.swiper?.slidePrev();
  // }

  private speed = 50;
  counters = [0, 4600, 1700, 900];
  endNbr = [20, 4737, 1799, 934];
 
  @ViewChild('divSection', { static: false }) divSection!: ElementRef;

  enquiryForm:any;






  
  feedbackForm: any;
  // divSection!: ElementRef;
   observer!: IntersectionObserver;



  constructor(private fb:FormBuilder,private toast:ToastController,private http:HttpClient,private route:Router, private menuCtrl:MenuController) { 
     this.feedbackForm = this.fb.group({
    name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      // course: ['', Validators.required],
       message: ['']
    });
//  this.enquiryForm=this.fb.group({
// name: ['', Validators.required],
//       mobile: ['', [Validators.required, Validators.minLength(10)]],
//       // course: ['', Validators.required],
//       message: ['']
//  });
  }
private baseUrl = environment.apiUrl
isOnline:any
  ngOnInit() {
 const target = this.divSection?.nativeElement;

  if (target) {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.animateCounters();
        this.observer.disconnect();
      }
    });

    this.observer.observe(target);
  } else {
    console.error("divSection element not found!");
  }


  // ⭐ SLIDE-IN ANIMATION 1
  const elements = document.querySelectorAll('.slide-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));


  // ⭐ SLIDE-IN ANIMATION 2
  const elements1 = document.querySelectorAll('.aslide-in');

  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer1.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements1.forEach(el => observer1.observe(el));

  }
  ionViewWillEnter() {
    
    this.scrollToSection1("home");
  }
  ngAfterViewInit() {
    const target = this.divSection?.nativeElement;

  if (target) {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.animateCounters();
        this.observer.disconnect();
      }
    });

    this.observer.observe(target);
  } else {
    console.error("divSection element not found!");
  }


  // ⭐ SLIDE-IN ANIMATION 1
  const elements = document.querySelectorAll('.slide-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));


  // ⭐ SLIDE-IN ANIMATION 2
  const elements1 = document.querySelectorAll('.aslide-in');

  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer1.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements1.forEach(el => observer1.observe(el));

}
 animateCounters() {
    const interval$ = interval(this.speed);

    interval$.subscribe(() => {
      this.counters = this.counters.map((counter, index) => {
        return Math.min(counter + 1, this.endNbr[index]);
      });
    });
  }
onclickresult(){
  this.route.navigate([('/results')])
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
        // console.log(scrollPosition)
        // console.log(pageHeight)
        if (scrollPosition >= pageHeight) {
          // console.log('You have reached the bottom of the page!');
          // Add your logic here when the user reaches the bottom
        }
  }
// phoneNumber = '8888388625';
  callPhoneNumber(phoneNumber:number) {
    window.location.href = `tel:${phoneNumber}`;
  }
  contactOwner() {
  window.open('https://wa.me/918888388625', '_blank');
}
  // ONCLICKGOHOME(){
  //   this.route.navigate(['/home'])
  // }
//    submitFeedback() {
//     const data = {
//       name: this.feedbackForm.value.name,
//       mobile: this.feedbackForm.value.mobile,
//       course: this.feedbackForm.value.course,
//       message: this.feedbackForm.value.message
//     };
// console.log(data)
//     // this.http.post(this.API_URL, data).subscribe(async (res:any) => {
//     //   let t = await this.toast.create({
//     //     message: "Inquiry Saved Successfully!",
//     //     duration: 2000,
//     //     color: 'success'
//     //   });
//     //   t.present();
//     //   // this.name = this.mobile = this.course = this.message = "";
//     // });
//   }

  // submitFeedback() {
    
  //   if (this.feedbackForm.valid) {
  //     fetch(this.API_URL, {
  //       method: 'POST',
  //       body: JSON.stringify(this.feedbackForm.value),
  //     })
  //       .then(response => response.json())
  //       .then(result => {
  //         alert("Enquiry Submitted Successfully 🎉");
  //         this.enquiryForm.reset();
  //       })
  //       .catch(err => console.error(err));
  //   }
  // }

//   submitFeedback() {
//   const body = new URLSearchParams();
//   body.append('name', this.feedbackForm.value.name);
//   body.append('mobile', this.feedbackForm.value.mobile);
//   body.append('course', this.feedbackForm.value.course);
//  body.append('message', this.feedbackForm.value.message);
//   fetch(this.API_URL, {
//     method: 'POST',
//     body // browser sets Content-Type to application/x-www-form-urlencoded
//     // do NOT set custom headers like Content-Type: application/json (that triggers preflight)
//   })++

//   .then(res => res.json())
//   .then(res => {
//     console.log('success', res);
//     this.feedbackForm.reset();
//   })
//   .catch(err => console.error('submit error', err));
// }
submitFeedback() {
  const data = {
    name: this.feedbackForm.value.name,
    mobile: this.feedbackForm.value.mobile,
    feedback: this.feedbackForm.value.message
  };

  fetch("https://script.google.com/macros/s/AKfycbzeKfPBvIG8Rr-WC0CafATjpkxuByvMT-54jcmWNmKQkE5BgzRe5tVgrW0NUOz7Ty1TLA/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(result => {
    alert("Feedback Saved Successfully!");
  })
  .catch(err => {
    console.log(err)
    alert("Error saving feedback");
  });
}

memories:Memory[] = [
    {  
      id: 1,
      imageUrl:'assets/homepage/fgrpwinnerphoto.jpg',
      // imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80',
      title: 'Annual Day Celebration',
      date: '2024',
      description: 'Students performing cultural programs'
    },
    {
      id: 2,
      imageUrl: 'assets/homepage/cricket_photo.jpg',
      title: 'Science Exhibition',
      date: '2024',
      description: 'Innovative projects by our students'
    },
    {
      id: 3,
      imageUrl: 'assets/homepage/girl_grp_photo.jpg',
      title: 'Field Trip',
      date: '2023',
      description: 'Educational visit to historical places'
    },
    {
      id: 4,
      imageUrl: 'assets/homepage/mot_girl_photo.jpg',
      title: 'Teachers Day',
      date: '2023',
      description: 'Students honoring their teachers'
    },
    {
      id: 5,
      imageUrl: 'assets/homepage/runnerupgrp_photo.jpg',
      title: 'Farewell Party',
      date: '2023',
      description: 'Celebrating graduating students'
    },
    {
      id: 6,
      imageUrl: 'assets/homepage/trophy_photo.jpg',
      title: 'Independence Day',
      date: '2023',
      description: 'Patriotic celebrations at school'
    },
    {
      id: 7,
      imageUrl: 'assets/homepage/winnergrpphoto_mem.jpg',
      title: 'Diwali Celebration',
      date: '2023',
      description: 'Festival of lights with students'
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80',
      title: 'Workshop Session',
      date: '2024',
      description: 'Interactive learning workshops'
    },
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80',
      title: 'Farewell Party',
      date: '2023',
      description: 'Celebrating graduating students'
    },
    {
      id: 10,
      imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=500&q=80',
      title: 'Independence Day',
      date: '2023',
      description: 'Patriotic celebrations at school'
    },
    {
      id: 11,
      imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=500&q=80',
      title: 'Diwali Celebration',
      date: '2023',
      description: 'Festival of lights with students'
    },
    {
      id: 12,
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80',
      title: 'Workshop Session',
      date: '2024',
      description: 'Interactive learning workshops'
    }
  ];
}


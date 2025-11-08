import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, 
    RouterModule,
    HomeComponent,
    AboutMeComponent,  
    ProjectComponent,
    ExperienceComponent,
  ]
})
export class AppComponent {
  title = 'my_portfolio';
  currentActive = 'home';

  @ViewChild('home', { static: true }) home!: ElementRef;
  @ViewChild('aboutMe', { static: true }) aboutMe!: ElementRef;
  @ViewChild('project', { static: true }) project!: ElementRef;
  @ViewChild('experience', { static: true }) experience!: ElementRef;

  constructor(private viewportScroller: ViewportScroller) {}
  ngAfterViewInit() {
    this.onWindowScroll(); 
  }
  
  navigateTo(section: string) {
    this.currentActive = section;
    this.viewportScroller.scrollToAnchor(section);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = this.viewportScroller.getScrollPosition()[1];  // Using ViewportScroller to get vertical scroll position

    if (this.experience.nativeElement.offsetTop <= scrollPosition) {
      this.currentActive = 'experience';
    } else if (this.project.nativeElement.offsetTop <= scrollPosition) {
      this.currentActive = 'project';
    } else if (this.aboutMe.nativeElement.offsetTop <= scrollPosition) {
      this.currentActive = 'aboutMe';
    } else {
      this.currentActive = 'home';
    }
  }
}
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

var fadeInAnimationLogo = trigger('fadeLogo', [      
  transition('void => *', [
    style({opacity: 0}),
    animate('0.5s 8s ease-in', style({opacity: 1}))
  ]),
]);

var fadeInAnimationOptions = trigger('fadeOpt', [      
  transition('void => *', [
    style({opacity: 0}),
    animate('0.5s 9s ease-in', style({opacity: 1}))
  ]),
]);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [fadeInAnimationLogo, fadeInAnimationOptions]
})
export class LoginComponent implements OnInit {

  isSmall: boolean = false

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(min-width: 768px)']).subscribe(state => {

      if (!state.matches) {
          this.isSmall = true;
      } else {
          this.isSmall = false;
      }
      
    });
  }

  ngOnInit(): void {
  }

}

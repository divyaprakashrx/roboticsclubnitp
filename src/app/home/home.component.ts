import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  showNavigationArrows = true;
  showNavigationIndicators = true;
  events = [
    {
      title: `Arduino workshop`,
      description: `Robotics club NIT-Patna conducted a two days Arduino workshop
                  where all about Arduino, Bluetooth interfacing, and Bot
                  interfacing were discussed. The major highlights of this
                  workshop were that the free kits were provided to the
                  participants using which they learned how to control bots
                  using Arduino. A demonstration of how to assemble the bot
                  (using the components provided in the kit ) was given.
                  Participants had hands-on experience on tasks like LED
                  Blinking, buzzers, DC motor interfacing with Arduino,
                  Bluetooth modules and pairing, autonomous bot assembling,
                  wireless LED, building an obstacle detecting bot using IR
                  sensors, a line follower bot, and wirelessly controlled bot
                  using Android phone. After completion of the workshop,
                  certificates were provided to all the participants.`
    },
    {
      title:  `3D printing`,
      description: `Robotics club, NIT Patna conducted a two days Workshop on 3D
                  printing. In the workshop basics of 3D designing were
                  discussed. The participants gained a sound knowledge about the
                  parts, principles, and working of 3D printing. They were given
                  access to use the 3D printer of our club to gather some ideas
                  about how to operate it, what are its specific features. It
                  was a great hands-on experience of creating stuff like
                  Robotics arm, gear, etc for all those who participated.`
    }
  ]
  constructor(
    private breakpointObserver: BreakpointObserver,
    config: NgbCarouselConfig
  ) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(){AOS.init();};
}

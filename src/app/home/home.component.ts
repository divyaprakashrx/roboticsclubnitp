import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
  NgbCarouselConfig,
} from '@ng-bootstrap/ng-bootstrap';

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

  showNavigationArrows = false;
  showNavigationIndicators = true;
  piabout = `It is my pleasure to introduce one of the most esteemed clubs of NIT
            Patna, the Robotics Club. Formed in the year 2015 by a bunch of not
            more than 8 students with vision of augmenting innovation and
            technical culture in the college. In this short span of time,
            Robotics Club managed to achieve an identity among college clubs at
            State-level. With its members ranging from coders to designers to
            hardware enthusiasts, they have been conducting an array of events
            around the year, thus enhancing the students' technical skills and
            making them aware of the fascinating world of automation, robotics,
            and electronics surrounding them. They are also promoting robotics
            among students of other nearby schools and colleges so that those
            students who lack resources also get equal opportunity to explore
            this fascinating domain. Members of this club have represented our
            college in several inter-college technical competitions, ideathons,
            and hackathons. The club has done a range of projects on IoT,
            drones, 3D designing, Bot fabrication, etc. Presently, members are
            actively engaged in working on a number of advanced projects like an
            AI-based attendance system and an automated bot for restaurants.
            Events like Robowars, Tiger's Nest, draws huge participation and
            audience. The club has been pretty successful in creating an
            atmosphere in the campus where people with different ideas could
            collaborate together to give shape to their ideas. I hope that the
            club continues doing so and keep making our college proud.`;

  aboutus = `Robotics club has been embodiment of innovation at NIT Patna. Being formed in year 2015-16 by Nripendra Saroj Sir ,our club boasts a glorious legacy. With our members ranging from seasoned coders to brilliant designers to hardware scientists, Our members have also represented our college at Smart India hackathon,headed by our current Captain Dheeraj Kumar Sir.We have been constantly working to enhance the students’ technical skills and making them aware of the fascinating world of automation,robotics and electronics which surrounds us.Boasting of a huge roster of exciting and engaging events, This  year’s techno-cultural  fest was nothing less than a rollercoaster ride for us.`;
  
  whatwedo = `Does robots fascinates you and have you ever fantasized to build one
            for yourself? The Robotics club NIT Patna is the place! The Robotics
            club at NIT Patna strives to stimulate interest in robotics among
            the students of the institute.Today robotics is a rapidly growing
            field,as technological advances continue;researching,designing, and
            building new robots serve various practical purposes.Robotics is a
            field which is not limited to a particular branch and is way more
            diverse than our own imagination and so is our student club.We are a
            diverse group of robotics nerds who find roots across all academic
            departments of the Institute. We at Robotics club believe in working
            and growing together.You can know more about us from here. #Hail
            Robotics.`;
  
  
  events = [
    {
      title: `Arduino workshop`,
      url: `assets/img/arduino.JPG`,
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
                  certificates were provided to all the participants.`,
    },
    {
      title: `3D printing Workshop`,
      url: `assets/img/3dprinting.jpg`,
      description: `Robotics club, NIT Patna conducted a two days Workshop on 3D
                  printing. In the workshop basics of 3D designing were
                  discussed. The participants gained a sound knowledge about the
                  parts, principles, and working of 3D printing. They were given
                  access to use the 3D printer of our club to gather some ideas
                  about how to operate it, what are its specific features. It
                  was a great hands-on experience of creating stuff like
                  Robotics arm, gear, etc for all those who participated.`,
    },
    {
      title: `ROBOWARS`,
      url: `assets/img/robowars.jpg`,
      description: `We conducted robowars which was a big hit.Students of different schools and 
      colleges from patna participated.Robowars are probably among the most awaited events because 
      of the thrill and excitement it provides.We have all grown watching transformers and it gives quite a 
      similar feel.Robowars  had a history of attracting great audiences from different colleges over the years and it’s prize amount have always been the highest. Yesteryear,I was won by a Team from Nit Silchar.`,
    },
    {
      title: `CHAKRAVYUH`,
      url: `assets/img/chakravyuh.jpg`,
      description: `We had a maze solving event which was based on the backdrop of Abhimanyu’s chakravyuh from Mahabharata.The bot was supposed to be abhimanyu and it had to reach to centre of the maze(or chakravyuh) using its weapons i.e, the codes in this case.It attracted a lot of audience especially from the programming  background. The fascination factor was also there because of the interesting  backdrop .`,
    },
    {
      title: `THE LION’S KINGDOM `,
      url: `assets/img/lionkingdom.jpg`,
      description: `In lion’s Kingdom, participants had to traverse their bots through a zig zag path overcoming the obstacles.The path had holes which were meant to be filled using cubes placed along the path.This event saw maximum participation because of its straightforward demands and facile nature.`,
    },
    {
      title: 'PCB designing',
      url: 'assets/img/pcb.jpg',
      description: `Printed Circuit Board are essential part of a electronic connections to generate a mechanical support as well. We can’t rely upon bread board for substantially increased number of components and for smaller packaging sizes of Integrated circuits .
      Robotics club ,NIT Patna organized a workshop on PCB Designing. This workshop focused over designing various kinds of electronic circuits and their use in making PCB Designing. Designing Software, Reference Materials, PPTs, Example sets and Study Materials were the tools provided (for the session).Concepts like :Circuit Designing, Simulation, PCB Design Structure, Component Placement and Design, Testing, Board Analysis, Fabrication output generation were discussed.`,
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    config: NgbCarouselConfig
  ) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {}
}

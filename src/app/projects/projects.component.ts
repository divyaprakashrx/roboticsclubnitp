import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: `HEXAPOD`,
      description: `Have you ever heard about a spider which can easily move on irregular surfaces even on
very rocky terrains with higher precise in its task .It is very flexible and can survive in any
environmental conditions. It can perform dexterous task and can walk even if its legs become
disabled.
We have prepared this for you
Have a look and learn many more intresting features of this spider robot .`,
    },
    {
      title: `3 -DOF ROBOTIC ARM`,
      description: `The rapid development in technology is making human life very simple and more comfortable.
We have prepared an arm which has human like dexterity in a variety of fields .
This arm can be used for multiple industrial purposes like welding, material handling ,
thermal spraying ,painting, drilling and so on.`,
    },
    {
      title: `QUADCOPTER`,
      description: `Are you very excited to capture passing clouds ,grander mountains, beauty of flying birds .
We have designed a wonderful mini helicopter which is used for aerial photography. This
can also be used for mapping and surveying . It has many other applications like payload
carrying ,crop spraying ,bird controlling ,asset inspection emergency responses and so on`,
    },
    {
      title: `VISITOR COUNTER`,
      description: `Visitor counter is a device which counts the number of visitors, entering and leaving a room. The main
intention is to design a system wherein the number of persons entering or leaving a room is kept track
of and displayed on a screen. It can be used in official meetings, to keep track of people entering a
secure place like bank. It can also be used as home automation system to ensure energy saving by
switching on the loads and fans only when needed.`,
    },
    {
      title: `NETWORK JAMMER`,
      description: `A Network Jammer Circuit is an instrument or device that can prevent the reception of signals by
Mobile Phones. The Mobile jammers are used in the classrooms, and library to maintain silence. It is
used in the seminar halls and meeting rooms to avoid disturbances. They can also be used in temples,
churches and hospitals.`,
    },
    {
      title: `COMPLETE HOME AUTOMATION SOLUTIONS`,
      description: `This project is mainly used to control the home appliances from anywhere using Bluetooth of the
smartphone. It can be used for Managing all of your home devices from one place. Maximizing
home security. Remote control of home functions. Increased energy efficiency. Improved appliance
functionality`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

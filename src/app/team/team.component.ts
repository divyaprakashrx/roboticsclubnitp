import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Observable<any>;
  one: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.team = db.list('members').valueChanges();
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {

  @Input() profiles: any;
  constructor() { }

  ngOnInit() {

  }

}

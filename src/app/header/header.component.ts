import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDetails } from '../models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() abc = new EventEmitter<string>();

  onInputKeypress(event: any) {
    this.abc.emit(event);
  }

  @Input() userDetails: UserDetails | null = null;

  constructor() {}

  ngOnInit(): void {}
}

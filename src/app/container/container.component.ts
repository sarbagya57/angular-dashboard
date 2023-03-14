import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  userInfo = {
    name: 'Sarbagaya Pokharel' ,
    email: 'Sarbagya@gmail.com',
  }

  onABC(event: any) {
    console.log(event.target.value);
  }
}

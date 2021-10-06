import { Component, OnInit } from '@angular/core';

type User = {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  text: string | undefined;
  age = 25;

  ngOnInit() {
    this.text = 'some string';

  }



  user1: User = {
    name: 'Poli',
    age: 34
  }
  user2: User = {
    name: 'Sedrik',
    age: 13
  }
  user3: User = {
    name: 'Arni',
    age: 56
  }
  

}


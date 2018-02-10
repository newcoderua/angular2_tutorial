import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h2>
  {{name}}
  <p>Your email is {{email}}</p>
  </h2>
  <p>State: {{address.state}}</p>
  <p>City: {{address.city}}</p>
  <p>Street: {{address.street}}</p>
  <button (click)="toggleHobbies()">{{ showHobbies ? "Hide Hobbies" : "Show hobbies"}}</button>
  <div *ngIf="showHobbies">
    <h3>Hobbies:</h3>
      <ul>
        <li *ngFor="let hobby of hobbies; let i = index">
          {{hobby}} <button (click)="deleteHobby(i)">X</button>
        </li>
      </ul>
      <form (submit)="addHobby(hobby.value)">
        <label> Add Hobby: </label><br />
        <input type="text" #hobby /><br />
      </form>

  </div>
  <hr />
  <form>
    <label> Name: </label><br />
    <input type="text" name="name" [(ngModel)]="name" /><br />
    <label> Email: </label><br />
    <input type="text" name="email" [(ngModel)]="email" /><br />
    <label> State: </label><br />
    <input type="text" name="address.state" [(ngModel)]="address.state" /><br />
    <label> City: </label><br />
    <input type="text" name="address.city" [(ngModel)]="address.city" />
  </form>

  `,

})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
    this.name = 'Vlad Stadnyk';
    this.email = "vlad@gmail.com";
    this.address = {
      city: "NYC",
      state: "NY",
      street: "Broadway"
    };
    this.hobbies = ['Music', 'Soccer', 'Food']
    this.showHobbies = false;
  }

  toggleHobbies(){
    if(this.showHobbies === false) {
      this.showHobbies = true;
    } else {
      this.showHobbies = false;
    }
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }
}

interface address {
  street: string,
  city: string,
  state: string,
}

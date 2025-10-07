import { Component } from '@angular/core';
import { Counter } from "./components/counter/counter";

@Component({
  selector: 'ind-home-page',
  imports: [Counter],
  template: `
    <h2>Home Page</h2>

    <ind-counter />
  `,
  styles: ``
})
export class HomePage {

}

export default HomePage;

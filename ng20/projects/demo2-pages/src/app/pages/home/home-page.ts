import { Component } from '@angular/core';
import { Counter } from "./components/counter/counter";

@Component({
  selector: 'ind-home-page',
  imports: [Counter],
  template: `
    <p>
      home-page works!
    </p>
    <ind-counter />
  `,
  styles: ``
})
export class HomePage {

}

export default HomePage;

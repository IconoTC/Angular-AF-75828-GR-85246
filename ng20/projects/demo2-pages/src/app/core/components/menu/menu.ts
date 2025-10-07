import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menuOptions } from '../../../app.routes';
import { MenuOption } from '../../types/menu-option';

@Component({
  selector: 'ind-menu',
  imports: [RouterModule],
  template: `
    <nav>
      <ul>

    @for (option of options; track option.route) {
      <li><a [routerLink]=" option.route " routerLinkActive="active" >{{ option.label }}</a></li>
    }

      </ul>
  `,
  styles: `
  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav li {
    display: inline;
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    color: black;
  }


  .active {
    font-weight: bold;
    text-decoration: underline;
    color: blue;
  }
  `
})
export class Menu {

  options: MenuOption[] = menuOptions;

}

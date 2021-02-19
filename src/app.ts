import { LitElement, html, css, customElement, internalProperty } from "lit-element";
import { users } from "./data";
import { User } from "./model";
import "./corp-user";

@customElement("corp-app")
export class CorpApp extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex: auto;
    }
  `;

  @internalProperty() users: User[] = users;
  @internalProperty() userId?: number; // @property

  render() {
    // lit-html
    return html`
      <div class="container">
        <div class="column">
          <ul>
            ${this.users.map(
              (user) => html`
                <li>
                  <a href="#" @click=${()=> this.selectUser(user)}>
                  ${user.fullName}</a>
                </li>
              `
            )}
          </ul>
        </div>
        <div class="column">
          <corp-user .userId=${this.userId}></corp-user>
        </div>
      </div>
    `;
  }

  private selectUser(user: User) {
    console.log('click', user);
    this.userId = user.id;
  }
}

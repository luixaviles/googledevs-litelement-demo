import { LitElement, css, html, customElement, property, internalProperty } from "lit-element";
import { userDetails } from './data';
import { UserDetail } from './model';

@customElement("corp-user")
export class CorpUser extends LitElement {
  static styles = css`
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
    }
    .card-content {
      padding: 10px;
    }
  `;

  // Propiedad!
  @property({ type: Number }) userId?: number;
  @internalProperty() userDetail?: UserDetail;

  render() {
    if(this.userDetail === undefined) {
      return html``;
    }

    return html`
      <div class="card">
        <img src="static/images/avatar.png" />
        <div class="card-content">
          <h4>${this.userDetail.fullName}</h4>
          <p>${this.userDetail.role}</p>
          <button>Edit</button>
        </div>
      </div>
    `;
  }

  updated() {
    this.userDetail = this.getUserDetail(this.userId);
  }

  private getUserDetail(id: number | undefined) {
    if(id === undefined) {
      return;
    }

    return userDetails[id];
  }

}

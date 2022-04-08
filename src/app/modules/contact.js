import { Page } from "./page.js";

export class Contact extends Page {
  constructor(name, email, phoneNum) {
    super();
    this.name = name;
    this.email = email;
    this.phoneNum = phoneNum;
  }

  getElementString() {
    return `
        <div class="row m-2" id="contact">
            <div class="col m-lg-5 content">
                <h1 class="text-center pt-3 mb-4">Contact</h1>
                <div class="mb-4 text-center">
                    <p>NAME: ${this.name}</p>
                    <p>EMAIL: ${this.email}</p>
                    <p>PHONE NUMBER: ${this.phoneNum}</p>
                </div>
            </div>
        </div>
        `;
  }
}
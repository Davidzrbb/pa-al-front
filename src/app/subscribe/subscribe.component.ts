import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})

export class SubscribeComponent implements OnInit {
  public returnError = false;
  public returnMessage: string = "";


  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  closeAlert() {
    this.returnError = false;
  }

  subscribeUser(login: string, password: string): void {
    if (login.trim() === "" || password.trim() === "") {
      this.returnError = true;
      this.returnMessage = "Veuillez remplir tous les champs";
      return;
    }
    if (login.match(/[^a-zA-Z\d]/g)) {
      this.returnError = true;
      this.returnMessage = "Veuillez ne pas utiliser de caractères spéciaux";
      return;
    }
    if (login.length < 3 || password.length < 3) {
      this.returnError = true;
      this.returnMessage = "Minimum 3 caractères";
      return;
    }
    if (login.length > 20 || password.length > 20) {
      this.returnError = true;
      this.returnMessage = "Veuillez ne pas dépasser 20 caractères";
      return;
    }
    this.router.navigate(['/home']);
  }
}

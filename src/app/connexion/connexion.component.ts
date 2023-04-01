import {Component, OnInit} from '@angular/core';
import {Params, Router} from "@angular/router";

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public returnError = false;
  public returnMessage: string = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  checkConnected(login: string, password: string): void {
    if (login.trim() != "" && password.trim() != "") {
      this.returnError = false;
    }
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  closeAlert() {
    this.returnError = false;
  }
}

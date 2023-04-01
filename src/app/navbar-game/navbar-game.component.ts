import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './navbar-game.component.html',
  styleUrls: ['./navbar-game.component.css']
})
export class NavbarGameComponent implements OnInit {
  public isConnectedBool: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      await this.isConnected();
    });
  }

  async isConnected() {
    this.isConnectedBool = true;
  }

  async isDeconnected() {
    this.isConnectedBool = false;
    await this.router.navigate(
      ['/login']);
  }

}

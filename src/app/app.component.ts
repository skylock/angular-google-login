import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'al-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public constructor(private titleService: Title, private cd: ChangeDetectorRef) {}

  user: SocialUser;
  title = 'angular-login';

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  logEvent(event: any) {
    this.user = {
      firstName: event.given_name,
      lastName: event.family_name,
      name: event.name,
      email: event.email,
      photoUrl: event.picture,
    };
    this.cd.detectChanges();

    console.log('event', event);
    console.log('user', this.user);
  }
}

export class SocialUser {
  email: string;
  name: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
}

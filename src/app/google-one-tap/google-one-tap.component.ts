import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-google-one-tap',
  templateUrl: './google-one-tap.component.html',
  styleUrls: ['./google-one-tap.component.scss']
})
export class GoogleOneTapComponent implements OnInit {

  @Output() public credentialResponse: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.googleSdk();
  }

  ngOnInit() {
  }

  googleSdk() {
    const configuration: IdConfiguration = {
      client_id: '1062246773381-gnbart6382dm573hfjdlu3n43cbjlgsr.apps.googleusercontent.com',
      callback: this.handleCredentialResponse,
    };

    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      console.log(' ### Loaded Google Library ###');
      // @ts-ignore
      google.accounts.id.initialize(configuration);
      // @ts-ignore
      google.accounts.id.prompt();
    };
  }

  handleCredentialResponse = (data: CredentialResponse) => {
    const decodedCredential = JSON.parse(atob(data.credential.split('.')[1]));
    this.credentialResponse.emit(decodedCredential);
  }

}

// https://developers.google.com/identity/one-tap/web

export interface IdConfiguration {
  client_id: string;   // Your application's client ID
  auto_select?: boolean; // Enables automatic selection.
  callback?: (data: CredentialResponse) => void; // The JavaScript function to handle ID tokens.
  native_callback?: () => void; // The JavaScript function to handle password credentials.
  cancel_on_tap_outside?: boolean; // Cancels the prompt if the user clicks outside the prompt.
  prompt_parent_id?: string; // The DOM ID of the One Tap prompt container element.
  nonce?: string; // A random string for ID tokens
  context?: string; // The title and words in the One Tap prompt
  state_cookie_domain?: string; // If you need to call One Tap in the parent domain and its subdomains,
                                // pass the parent domain to this field so that a single shared cookie is used.
}

export interface CredentialResponse {
  credential: string; // This field is the returned ID token.
  select_by: any; // This field sets how the credential was selected.
  client_id: string; // This field sets the OAuth client ID.
}

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  fullname:  string = "";
  email:  string = "";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
    public user: UserService,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  r =  this.afAuth.authState.subscribe((user: firebase.User) => {
    if(user) {
      let userRef = this.afstore.collection('users');
      let allUsers = userRef.get()
      .toPromise()
      .then(snapshot => {
        snapshot.forEach(doc =>{
          if(doc.id == user.uid){
            this.fullname = doc.data().fullname
            this.email = doc.data().email
          }
        });
      })
      .catch(err => {
        console.log('Error on getting data', err);
      });
      this.router.navigate(['/home'])
    }
    else{
      console.log('ngoma aikuiingia');
      this.router.navigate(['/login'])

    }
    return;
  });
}

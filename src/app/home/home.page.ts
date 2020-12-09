import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fullname: string ="";
  email: string ="";
  constructor(public afAuth: AngularFireAuth,
      public afstore: AngularFirestore,
     private router: Router) {}

  ngOnInit() {
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
    }
    else{
      console.log('ngoma aikuiingia');
    }
    return;
  });
   
  // LOGOUT FUNCTION FOR ENDIND SESSION
  logout(){
    this.afAuth.signOut().then(() => {
        this.router.navigate(['/login'])
    })
  }
   Admin(){
     this.router.navigate(["/admin"])
   }

   bteacher(){
    this.router.navigate(["/bteacher"])
  }

}

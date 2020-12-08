import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/auth.service';
import * as firebase from 'firebase';
@Component({
    selector: "app-login",
    templateUrl: "./login.page.html",
    styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
    email: string = ""
    password: string =""
    fullname: string =""
    constructor(
        private router: Router,
        public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
        ) {}

    // Functions for nervigation Where in costructor must have private router: Router,
    ngOnInit() {}

    signup() {
        this.router.navigate(["signup"]);
    }
    
    forgetpass(){
        this.router.navigate(["forgotpass"]);
    }
// Functions for nervigation Where in costructor must have private router: Router,

      
  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
        header: title,
        message: content,
        buttons: ['OK']
    })

    await alert.present()
}

  async  login(){
        const { email, password, fullname } = this
        try{
            const res = await this.afAuth.signInWithEmailAndPassword(email, password)
            
            this.user.setUser({
                email,
                fullname,
                uid: res.user.uid,
            })
          
			this.presentAlert('Success', 'You are loged in!')
            this.router.navigate(['/home'])
             }catch(error){
            console.dir(error)
            this.presentAlert(error, 'wrong credentials ')
        }
    }

    //   LOGIN WITH FACEBOOK
    loginwithfacebook(){
        const provider = new firebase.auth.FacebookAuthProvider();
    
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential;
            // The signed-in user info.
            const user = result.user;
            // ...
           const newauth = result.additionalUserInfo

            if(user && newauth ){
                if(newauth.isNewUser){
                    const email=user.email;
                const fullname = user.displayName;
                const usertype = "student"
                    firebase.firestore().collection("users").doc(user.uid)
                    .set({
                        email,
                        fullname,
                        usertype
                    })

                this.user.setUser({
                    email,
                    fullname,
                    uid: user.uid,
                })
            }
                this.presentAlert('success', 'You are loged in')
                this.router.navigate(['/home'])
            }

          }).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
            console.log(errorCode, errorMessage,email, credential)
          });
          

        
    }

    //   LOGIN WITH FACEBOOK

    //   LOGIN WITH GOOGLE
    loginwithgoogle(){
        const  provider = new firebase.auth.GoogleAuthProvider();

    
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential;
            // The signed-in user info.
            const user = result.user;
            // ...
           const newauth = result.additionalUserInfo

            if(user && newauth ){
                if(newauth.isNewUser){
                    const email=user.email;
                const fullname = user.displayName;
                const usertype = "student"
                    firebase.firestore().collection("users").doc(user.uid)
                    .set({
                        email,
                        fullname,
                        usertype,
                    })

                this.user.setUser({
                    email,
                    fullname,
                    uid: user.uid,
                })
            }
                this.presentAlert('success', 'You are loged in')
                this.router.navigate(['/home'])
            }

          }).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
            console.log(errorCode, errorMessage,email, credential)
          });
          

        
    }

    //   LOGIN WITH GOOGLE

    //   LOGIN WITH TWITTER
    loginwithTwitter(){
        const  provider = new firebase.auth.TwitterAuthProvider();

    
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential;
            // The signed-in user info.
            const user = result.user;
            // ...
           const newauth = result.additionalUserInfo

            if(user && newauth ){
                if(newauth.isNewUser){
                    const email=user.email;
                const fullname = user.displayName;
                const usertype = "student"
                    firebase.firestore().collection("users").doc(user.uid)
                    .set({
                        email,
                        fullname,
                        usertype, 
                    })

                this.user.setUser({
                    email,
                    fullname,
                    uid: user.uid,
                })
            }
                this.presentAlert('success', 'You are loged in')
                this.router.navigate(['/home'])
            }

          }).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
            console.log(errorCode, errorMessage,email, credential)
          });
          

        
    }

    //   LOGIN WITH TWITTER
}

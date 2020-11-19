import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    fullname: string = ""
    email: string = ""
    password: string =""

  constructor(
    public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router
    ) { }

  ngOnInit() {

  } 
  login() {  
    this.router.navigate(['login']);  
  }
  
  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

 async register() {
     const { fullname, email, password } = this

     try{
       const res = await this.afAuth.createUserWithEmailAndPassword(email, password)

       this.afstore.doc(`users/${res.user.uid}`).set({
          email,
          fullname,      
       })

       this.user.setUser({
      email,
      fullname,
      uid: res.user.uid,
			})

			this.presentAlert('Success', 'You are registered!')
			this.router.navigate(['/home'])     }catch(error){
       console.dir(error)
       this.presentAlert(error, '')
     }

}

}
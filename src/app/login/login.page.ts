import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/auth.service';

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

    ngOnInit() {}

    signup() {
        this.router.navigate(["signup"]);
    }
    
    forgetpass(){
        this.router.navigate(["forgotpass"]);
    }

      
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
}

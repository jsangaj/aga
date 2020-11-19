import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import '@firebase/auth';


interface user {
  email: string,
  fullname: string,
uid: string,
}

@Injectable()
export class UserService {
	private user: user

	constructor(private afAuth: AngularFireAuth) {

	}

	setUser(user: user) {
		this.user = user
	}

	getEmail(): string {
		return this.user.email
	}

    getName(): string {
		return this.user.fullname
	}

 
 
	// reAuth(email: string, password: string) {
	// 	return this.afAuth.currentUser.reAuthenticateWithCredential(auth.EmailAuthProvider.credential(email, password))
	// }

	// updatePassword(newpassword: string) {
	// 	return this.afAuth.auth.currentUser.updatePassword(newpassword)
	// }

	// updateEmail(newemail: string) {
	// 	return this.afAuth.currentUser.updateEmail(newemail)
    // }
 


	async isAuthenticated() {
		if(this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		if(user) {
			this.setUser({
        email: user.email,
				fullname: user.displayName,
				uid: user.uid,
			})

			return true
		}
		return false
	}

	getUID(): string {
		return this.user.uid
    }
    
    async logout(): Promise<any>{
         return this.afAuth.signOut();
      }
    
}
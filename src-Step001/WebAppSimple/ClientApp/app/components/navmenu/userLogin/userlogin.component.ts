import { Component, Inject} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'user-login',
    templateUrl: './userlogin.component.html',
    styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent {

    public userInfo: any;
    

    public nonConnected = false;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'account/MeInfo').subscribe(result => {
            console.log( "Result Call");
            this.userInfo = result.json();

            console.log(result.json());
            console.log(this.userInfo, "from userInfo");    
            this.nonConnected = false;
           

        }, error => {
            console.error(error, "Error");
            this.nonConnected = true;

            });
    }

}

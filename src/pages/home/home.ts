import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";
import { UserServiceProvider } from "../../providers/user-service/user-service";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public userService: UserServiceProvider
  ) {}

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: "Modify your album",
      buttons: [
        {
          text: "Destructive",
          role: "destructive",
          handler: () => {
            console.log("Destructive clicked");
          }
        },
        {
          text: "Archive",
          handler: () => {
            console.log("Archive clicked");
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    this.userService.getUsers().subscribe(
      data => {
        // Success
        this.users = data["results"];
      },
      error => {
        console.error(error);
      }
    );
  }
}

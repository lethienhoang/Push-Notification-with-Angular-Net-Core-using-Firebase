import { Component } from "@angular/core";
import { PushNotificationService } from "../services/push-notification.service";
import { NotificationService } from "../services/notification.service";
import { messaging } from "firebase";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  error: string;
  messages: Array<any> = [];
  isWaiting = false;

  constructor(
    private fcmService: PushNotificationService,
    private notificationService: NotificationService
  ) {
    fcmService.receiveMessage().subscribe(message => {
      this.messages.push(message);
    });
  }

  isRegisteredForPush = () => localStorage.getItem("currentUser") !== null;

  registerForPush() {
    this.fcmService.requestPermission().subscribe(
      token => {
        localStorage.setItem("currentUser", token);
        this.notificationService
          .registerForPush("currentUser", token)
          .subscribe();
      },
      error => {
        this.error = error;
      }
    );
  }

  removeSubscription() {
    const currentToken = localStorage.getItem("currentUser");

    if (currentToken) {
      this.fcmService.removeToken(currentToken).subscribe(
        ok => localStorage.removeItem("currentUser"),
        error => {
          this.error = error;
          localStorage.removeItem("currentUser");
        }
      );
    }
  }

  sendNotification = (title: string, body: string) =>
    this.notificationService.sendNotification({ title, body }).subscribe();

  sendNotificationWIthDelay(title: string, body: string) {
    const newWindow = window.open();
    newWindow.document.write("Wait to see notification");
    setTimeout(() => {
      this.sendNotification(title, body);
    }, 1000);
  }
}

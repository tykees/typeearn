import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { PlayGameComponent } from "./game/play-game/play-game.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { PracticeGameComponent } from "./game/practice-game/practice-game.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        data: { title: "Admin login Component" }
      }
      // {
      //   path: "dashboard",
      //   component: HomeComponent
      // }
    ],
    data: { title: " Admin Component" }
  },
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home Component" }
  },
  {
    path: "practice-game",
    component: PracticeGameComponent,
    data: { title: "Practice-Game Component" }
  },
  {
    path: "play-game",
    component: PlayGameComponent,
    data: { title: "Play-Game Component" }
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
    data: { title: "Contact-us Component" }
  },
  {
    path: "about-us",
    component: AboutUsComponent,
    data: { title: "about-us Component" }
  },
  {
    path: "profile",
    component: UserDashboardComponent,
    data: { title: "User-dashboard Component" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

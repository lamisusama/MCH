import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from './icons/icons.module';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { AssetsComponent } from './components/assets/assets.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    SideBarComponent,
    AssetsComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

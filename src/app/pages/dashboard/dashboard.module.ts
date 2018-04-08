import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { SwiperModule } from 'angular2-useful-swiper';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { KittenComponent } from './kitten/kitten.component';
import { PlayerComponent } from './rooms/player/player.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { SolarComponent } from './solar/solar.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TeamComponent } from './team/team.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { TrafficComponent } from './traffic/traffic.component';
import { WeatherComponent } from './weather/weather.component';
import { DashSelectedComponent } from './dash-selected/dash-selected.component';
import { DashAreaComponent } from './dash-area/dash-area.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    InfiniteScrollModule,
    SwiperModule
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    DashSelectedComponent,
    DashAreaComponent,
  ],
})
export class DashboardModule { }

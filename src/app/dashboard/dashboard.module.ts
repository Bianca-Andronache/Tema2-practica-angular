import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GamePageComponent } from './game-page/game-page.component';
import { GameModalComponent } from './game-modal/game-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GameCardComponent } from './game-card/game-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { GameInfoComponent } from './game-info/game-info.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@NgModule({
  declarations: [
    GamePageComponent,
    GameModalComponent,
    GameCardComponent,
    GameInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzModalModule,
    NzButtonModule,
    NzCardModule,
    NzDescriptionsModule
  ]
})
export class DashboardModule { }

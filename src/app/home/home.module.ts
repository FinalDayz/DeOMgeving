import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DasboardComponent} from './components/dasboard/dasboard.component';
import {ManageExperimentComponent} from './components/manage-experiment/manage-experiment.component';
import {ExperimentCardComponent} from './components/experiment-card/experiment-card.component';
import {HomeComponent} from './page/home.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateHistoryComponent} from './components/manage-experiment/update-history/update-history.component';
import {UpdateMessageComponent} from './components/manage-experiment/update-history/update-message/update-message.component';
import {UserManagementComponent} from './components/user-management/user-management.component';
import {UserComponent} from './components/user-management/user/user.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {VasteDienstenComponent} from './components/vaste-diensten/vaste-diensten.component';
import {OverzichtExporterenComponent} from './components/overzicht-exporteren/overzicht-exporteren.component';


@NgModule({
  declarations: [
    DasboardComponent,
    HomeComponent,
    ExperimentCardComponent,
    ManageExperimentComponent,
    HomeComponent,
    UserManagementComponent,
    UserComponent,
    UpdateHistoryComponent,
    UpdateMessageComponent,
    VasteDienstenComponent,
    OverzichtExporterenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [SharedModule, FormsModule, DasboardComponent,
    HomeComponent,
    ExperimentCardComponent,
    ManageExperimentComponent,
    HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}

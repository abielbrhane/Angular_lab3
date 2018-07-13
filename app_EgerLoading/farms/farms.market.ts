import { RouterModule } from '@angular/router';
import { FarmsComponent } from './farms.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MyguardGuard} from './myGuard';
import { ErrorComponent } from './error.component';


export const FARM_DETAILS_ROUTSE = [{path:'',component:FarmsComponent}];
@NgModule({
    declarations: [FarmsComponent,ErrorComponent],
    imports:[
        BrowserModule,
        RouterModule.forRoot([
            {path: 'farmDeatils', component: FarmsComponent},
            {path: 'farm/:id', component: FarmsComponent, canActivate:[MyguardGuard]},
            {path: 'error',component:ErrorComponent},
            {path: '**', redirectTo: '/'}
        ])
    ],
    providers:[MyguardGuard],
    bootstrap: [FarmsComponent]

        })
export class FarmersMarketModule{}

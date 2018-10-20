import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
 {path: 'accomodation', component: AccomodationComponent},
 {path: 'food-beverage', component: FoodBeverageComponent },
 {path: 'lifestyle', component: LifestyleComponent},
 {path: 'offers', component: OffersComponent},
 {path: 'celebrations', component: CelebrationsComponent},
 {path: 'weddings', component: WeddingsComponent},
 {path: 'signin', component: SigninComponent},
 {path: 'signup', component: SignupComponent},
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }

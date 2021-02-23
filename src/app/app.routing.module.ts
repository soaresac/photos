import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { RequiresAutenticationGuard } from './core/auth/requires-authentication';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotolistResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], 
        children: [
            { path: '', component: SigninComponent, canActivate: [AuthGuard]},
            { path: 'signup', component: SignupComponent},
        ]
    },
    { path: 'user/:userName', component: PhotoListComponent, resolve: {
        photos: PhotolistResolver
    }},
    { path: 'p/add', component: PhotoFormComponent,  canActivate: [RequiresAutenticationGuard]},
    {path: 'p/:photoId', component: PhotoDetailsComponent},
    { path: 'not-found', component: NotFoundComponent},
    { path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
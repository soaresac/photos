import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { RequiresAutenticationGuard } from './core/auth/requires-authentication';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';
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
            { path: '', component: SigninComponent, canActivate: [AuthGuard],
                data: {
                    title: 'Sign in'
                }
            },
            { path: 'signup', component: SignupComponent, 
                data: {
                    title: 'Sign Up'
                }
            },
        ]
    },
    { path: 'user/:userName', component: PhotoListComponent, 
        resolve: {
            photos: PhotolistResolver
        },
        data: {
            title: 'Timeline'
        }
    },
    { path: 'p/add', component: PhotoFormComponent,  canActivate: [RequiresAutenticationGuard],
        data: {
            title: 'Photo Upload'
        }
    },
    { path: 'p/:photoId', component: PhotoDetailsComponent,
        data: {
            title: 'Photo Detail'
        }
    },
    {
        path: 'error',
        component: GlobalErrorComponent,
        data: { 
            title: 'Error'
        }
    },
    { path: 'not-found', component: NotFoundComponent,
        data: {
            title: 'Not Found'
        }
    },
    { path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
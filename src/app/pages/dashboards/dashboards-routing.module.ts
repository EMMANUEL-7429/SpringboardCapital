import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { SaasComponent } from './saas/saas.component';
import { CryptoComponent } from './crypto/crypto.component';
import { BlogComponent } from './blog/blog.component';
///import { LeaveApplicationComponent } from '../leave-application/leave-application/leave-application.component';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: 'saas',
        component: SaasComponent
    },
    {
        path: 'crypto',
        component: CryptoComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    // {
    //     path:'leave-application',
    //     component:LeaveApplicationComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}

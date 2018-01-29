import { NgModule }            from '@angular/core';
import { Routes,
    RouterModule }        from '@angular/router';

import { FixturesComponent }    from './fixtures.component';




const routes: Routes = [
    { path: ':id', component:FixturesComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FixturesRoutingModule {}

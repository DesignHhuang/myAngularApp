import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Neo4jComponent } from './neo4j/neo4j.component';

const routes: Routes = [
    { path: 'neo4jd3', component: Neo4jComponent }
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Neo4jd3RoutingModule { }

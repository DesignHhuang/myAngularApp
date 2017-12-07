import { NgModule } from '@angular/core';
import { Neo4jComponent } from './neo4j/neo4j.component';
import { Neo4jd3RoutingModule } from './neo4jd3-routing.module';

@NgModule({
  imports: [
    Neo4jd3RoutingModule
  ],
  declarations: [Neo4jComponent]
})
export class Neo4jd3Module { }

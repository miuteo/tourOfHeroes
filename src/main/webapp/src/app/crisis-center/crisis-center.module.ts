import {NgModule} from '@angular/core';
import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisService} from './crisis.service';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisListComponent} from './crisis-list.component';
import {CommonModule} from '@angular/common';
import {CrisisDetailComponent} from './crisis-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule,CrisisCenterRoutingModule,FormsModule],
  declarations: [CrisisCenterComponent,
                CrisisCenterHomeComponent,
                CrisisListComponent,
                CrisisDetailComponent],
  providers: [CrisisService]
})
export class CrisisCenterModule {}

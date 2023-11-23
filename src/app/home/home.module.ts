import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgbCollapseModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppdevComponent } from './appdev/appdev.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ItSolutionsComponent } from './it-solutions/it-solutions.component';
import { GlobalComponent } from './global/global.component';
import { CompanyComponent } from './company/company.component';
import { StaffAugmentationComponent } from './staff-augmentation/staff-augmentation.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { StrategyComponent } from './strategy/strategy.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AppdevComponent,
    ContactComponent,
    NewsComponent,
    ItSolutionsComponent,
    GlobalComponent,
    CompanyComponent,
    StaffAugmentationComponent,
    ProjectManagementComponent,
    StrategyComponent,
  ],
  imports: [
    TabsModule,
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule,
    NgbDatepickerModule
  ]
})
export class HomeModule { }

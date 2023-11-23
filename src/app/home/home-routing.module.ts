import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login-form', component: LoginComponent },
      { path: 'app-dev', component: AppdevComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsComponent },
      { path: 'it-solutions', component: ItSolutionsComponent },
      { path: 'global', component: GlobalComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'staff-augmentation', component: StaffAugmentationComponent },
      { path: 'project-management', component: ProjectManagementComponent },
      { path: 'strategy', component: StrategyComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

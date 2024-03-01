import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { SharedService } from './shared.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from "primeng/calendar";


import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { SplitButtonModule } from 'primeng/splitbutton';
import { UIkitModule } from './demo/components/uikit/uikit.module';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { ProgressBarModule } from 'primeng/progressbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { KeyFilterModule } from 'primeng/keyfilter';


import { MaterialComponent } from './components/wip/material/material.component';
import { ProdPerformComponent } from './components/wip/prod-perform/prod-perform.component';
import { ProdPerformSaComponent } from './components/wip/prod-perform-sa/prod-perform-sa.component';
import { InwardComponent } from './components/wip/inward/inward.component';
import { InprocessComponent } from './components/wip/inprocess/inprocess.component';
import { Inward2Component } from './components/wip/inward2/inward2.component';
import { TrendsComponent } from './components/wip/trends/trends.component';
import { TimeComponent } from './components/microfunctions/time/time.component';
import { OrderDisturbComponent } from './components/wip/order-disturb/order-disturb.component';
import { InprocessRejectComponent } from './components/wip/inprocess-reject/inprocess-reject.component';
import { EcrComponent } from './components/wip/ecr/ecr.component';
import { ProdPlanComponent } from './components/planning/prod-plan/prod-plan.component';
import { AddEditProdPlanComponent } from './components/planning/prod-plan/add-edit-prod-plan/add-edit-prod-plan.component';
import { ProdMachinewiseComponent } from './components/planning/prod-machinewise/prod-machinewise.component';
import { AddEditProdMachinewiseComponent } from './components/planning/prod-machinewise/add-edit-prod-machinewise/add-edit-prod-machinewise.component';
import { ProdShopfloorwiseComponent } from './components/planning/prod-shopfloorwise/prod-shopfloorwise.component';
import { ShiftComponent } from './components/microfunctions/shift/shift.component';
import { AlertReportComponent } from './components/breakdown/alert-report/alert-report.component';
import { ShopfloorwiseComponent } from './components/breakdown/shopfloorwise/shopfloorwise.component';
import { CategorywiseComponent } from './components/breakdown/categorywise/categorywise.component';
import { AlertComponent } from './components/breakdown/alert/alert.component';
import { AssemblylineAnalysisComponent } from './components/breakdown/assemblyline-analysis/assemblyline-analysis.component';
import { MachinewiseAnalysisComponent } from './components/breakdown/machinewise-analysis/machinewise-analysis.component';
import { CallHelpComponent } from './components/breakdown/call-help/call-help.component';
import { ShiftSkillComponent } from './components/resource/shift-skill/shift-skill.component';
import { EmployeeMasterComponent } from './components/resource/employee-master/employee-master.component';
import { ShiftStrengthComponent } from './components/resource/shift-strength/shift-strength.component';
import { MonthlyReportComponent } from './components/resource/monthly-report/monthly-report.component';
import { EvacuationComponent } from './components/resource/evacuation/evacuation.component';
import { DailyReportComponent } from './components/resource/daily-report/daily-report.component';
import { QualityManagementComponent } from './components/quality/quality-management/quality-management.component';


import { OeeComponent } from './components/report/oee/oee.component';
import { TodoComponent } from './components/report/todo/todo.component';
import { ConfigurationComponent } from './components/config/configuration/configuration.component';
import { CompanyComponent } from './components/config/company/company.component';
import { LocationComponent } from './components/config/location/location.component';
import { ShopfloorComponent } from './components/config/shopfloor/shopfloor.component';
import { AssemblylineComponent } from './components/config/assemblyline/assemblyline.component';
import { SubAssemblylineComponent } from './components/config/sub-assemblyline/sub-assemblyline.component';
import { MachineidComponent } from './components/config/machineid/machineid.component';
import { ProductidComponent } from './components/config/productid/productid.component';
import { ProductRecipeComponent } from './components/config/product-recipe/product-recipe.component';
import { BreakdownComponent } from './components/config/breakdown/breakdown.component';
import { SubBreakdownComponent } from './components/config/sub-breakdown/sub-breakdown.component';
import { DepartmentComponent } from './components/config/department/department.component';
import { DesignationComponent } from './components/config/designation/designation.component';
import { QualityDashboardComponent } from './components/quality/quality-dashboard/quality-dashboard.component';
import { ProdPlantwiseComponent } from './components/planning/prod-plantwise/prod-plantwise.component';
import { ProdAssemblylinewiseComponent } from './components/planning/prod-assemblylinewise/prod-assemblylinewise.component';
import { OeeReportComponent } from './components/report/oee-report/oee-report.component';
import { ProdPlanReportComponent } from './components/report/productionreport/prod-plan-report/prod-plan-report.component';
import { ProdLineConfigComponent } from './components/report/productionreport/prod-line-config/prod-line-config.component';
import { ProdAndonReportComponent } from './components/report/productionreport/prod-andon-report/prod-andon-report.component';
import { DailyInfoComponent } from './components/report/resourcereport/daily-info/daily-info.component';
import { MonthlyInfoComponent } from './components/report/resourcereport/monthly-info/monthly-info.component';
import { QualityManagementReportComponent } from './components/report/qualityreport/quality-management-report/quality-management-report.component';
import { ProdInfoComponent } from './components/planning/prod-info/prod-info.component';
import { SkillMatrixComponent } from './components/config/skill-matrix/skill-matrix.component';
import { BatchComponent } from './components/config/batch/batch.component';
import { PoNoComponent } from './components/config/po-no/po-no.component';
import { ShiftConfigComponent } from './components/config/shift-config/shift-config.component';
import { MachineDetailsComponent } from './components/production/machine-details/machine-details.component';
import { QcCheckTypeComponent } from './components/config/qc-check-type/qc-check-type.component';
import { ProdStatsComponent } from './components/microfunctions/prod-stats/prod-stats.component';
import { FoodPriceComponent } from './components/canteen/food-price/food-price.component';
import { SoloAssemblylineComponent } from './components/production/solo-assemblyline/solo-assemblyline.component';
import { AddEditSoloAssemblylineComponent } from './components/production/solo-assemblyline/add-edit-solo-assemblyline/add-edit-solo-assemblyline.component';
import { QcDefectTypeComponent } from './components/config/qc-defect-type/qc-defect-type.component';
import { QualityInspectionComponent } from './components/quality/quality-inspection/quality-inspection.component';
import { SpellAssemblylineComponent } from './components/production/spell-assemblyline/spell-assemblyline.component';
import { AddEditSpellAssemblylineComponent } from './components/production/spell-assemblyline/add-edit-spell-assemblyline/add-edit-spell-assemblyline.component';




@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, MaterialComponent,
        ProdPerformComponent, ProdPerformSaComponent, InwardComponent, InprocessComponent,
        Inward2Component, TrendsComponent, TimeComponent, OrderDisturbComponent, InprocessRejectComponent, EcrComponent,
        ProdPlanComponent, AddEditProdPlanComponent, ProdMachinewiseComponent, AddEditProdMachinewiseComponent,
        ProdShopfloorwiseComponent, ShiftComponent, AlertReportComponent, ShopfloorwiseComponent, CategorywiseComponent,
        AlertComponent, AssemblylineAnalysisComponent, MachinewiseAnalysisComponent, CallHelpComponent, ShiftSkillComponent,
        EmployeeMasterComponent, ShiftStrengthComponent, MonthlyReportComponent, EvacuationComponent, DailyReportComponent,
        QualityManagementComponent, OeeComponent, TodoComponent, ConfigurationComponent, CompanyComponent,
        LocationComponent, ShopfloorComponent, AssemblylineComponent, SubAssemblylineComponent, MachineidComponent, ProductidComponent,
        ProductRecipeComponent, BreakdownComponent, SubBreakdownComponent, DepartmentComponent, DesignationComponent,
        QualityDashboardComponent, ProdPlantwiseComponent, ProdAssemblylinewiseComponent, OeeReportComponent, ProdPlanReportComponent,
        ProdLineConfigComponent, ProdAndonReportComponent, DailyInfoComponent, MonthlyInfoComponent, QualityManagementReportComponent,
        ProdInfoComponent, SkillMatrixComponent, BatchComponent, PoNoComponent, ShiftConfigComponent, MachineDetailsComponent,
        QcCheckTypeComponent, ProdStatsComponent, FoodPriceComponent, SoloAssemblylineComponent, AddEditSoloAssemblylineComponent, QcDefectTypeComponent, QualityInspectionComponent, SpellAssemblylineComponent, AddEditSpellAssemblylineComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,

        //components WIP
        CardModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DialogModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        InputTextModule,
        SplitButtonModule,
        UIkitModule,
        CalendarModule,
        ToggleButtonModule,
        SelectButtonModule,
        DividerModule,
        DockModule,
        ProgressBarModule,
        ConfirmDialogModule,
        ToastModule,
        TooltipModule,
        KeyFilterModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, SharedService, MessageService, ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

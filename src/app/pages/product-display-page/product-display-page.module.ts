import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductDisplayPageComponent } from './product-display-page/product-display-page.component';

const routes: Routes = [
	{
		path: '',
		component: ProductDisplayPageComponent
	}
];

@NgModule({
	declarations: [
		ProductDisplayPageComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	exports: [
		RouterModule
	]
})
export class ProductDisplayPageModule { }

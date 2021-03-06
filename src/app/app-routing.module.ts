import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './constants/routes';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: AppRoutes.PRODUCT_LIST
	},
	{
		path: AppRoutes.PRODUCT_LIST,
		loadChildren: () => import('./pages/product-list-page/product-list-page.module').then(mod => mod.ProductListPageModule)
	},
	{
		path: `${AppRoutes.PDP}/:id`,
		loadChildren: () => import('./pages/product-display-page/product-display-page.module').then(mod => mod.ProductDisplayPageModule)
	},
	{
		path: AppRoutes.ADD_PRODUCT,
		loadChildren: () => import('./pages/add-product-page/add-product-page.module').then(mod => mod.AddProductPageModule)
	},
	{
		path: AppRoutes.ERROR.ROOT,
		loadChildren: () => import('./pages/error-page/error-page.module').then(mod => mod.ErrorPageModule)
    },
    {
		path: AppRoutes.CHECKOUT,
		loadChildren: () => import('./pages/checkout-page/checkout-page.module').then(mod => mod.CheckoutPageModule)
    },
    {
		path: AppRoutes.USER_PAGE,
		loadChildren: () => import('./pages/user-page/user-page.module').then(mod => mod.UserPageModule)
	},
	{
		path: '**',
		redirectTo: AppRoutes.ERROR.ROOT
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }

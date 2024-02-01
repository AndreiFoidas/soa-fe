import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileType, MfeUtil} from "utils";
import {environment} from "../environments/environment";

export const mef = new MfeUtil();

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'stores',
    loadChildren: () => mef.loadRemoteFile({
      remoteName: "store",
      remoteEntry: `${environment.moduleFederationUrl.app2}remoteStore.js`,
      exposedFile: "StoreModule",
      exposeFileType: FileType.Module
    }).then((m) => m.StoreModule),
  },
  {
    path: 'order',
    loadChildren: () => mef.loadRemoteFile({
      remoteName: "orders",
      remoteEntry: `${environment.moduleFederationUrl.app3}remoteOrders.js`,
      exposedFile: "OrderModule",
      exposeFileType: FileType.Module
    }).then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

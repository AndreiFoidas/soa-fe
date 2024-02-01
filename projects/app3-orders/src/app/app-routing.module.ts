import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileType, MfeUtil} from "utils";
import {environment} from "../environments/environment";

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: 'home',
    component: await mfe.loadRemoteFile({
      remoteName: "home",
      remoteEntry: `${environment.moduleFederationUrl.app1}remoteHome.js`,
      exposedFile: "HomeComponent",
      exposeFileType: FileType.Component,
    }).then((m) => m.HomeComponent),
  },
  {
    path: 'stores',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "store",
      remoteEntry: `${environment.moduleFederationUrl.app2}remoteStore.js`,
      exposedFile: "StoreModule",
      exposeFileType: FileType.Module
    }).then((m) => m.StoreModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

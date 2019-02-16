import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuItem } from '@nebular/theme';

export const Menu : NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'nb-home',
      home: true,
      link: 'home'
    },
    {
      title: 'Gestion de Usuarios',
      icon: 'nb-person',
      link: 'user'
    },
    {
      title: 'Contenedores',
      icon: 'nb-layout-one-column',
      link: 'container'
    },
    {
      title: 'Reporte',
      icon: 'nb-tables',
      link: 'report'
    }
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }

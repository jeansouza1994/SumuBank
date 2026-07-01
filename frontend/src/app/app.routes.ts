import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component')
        .then(m => m.AuthLayoutComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component')
            .then(m => m.LoginComponent)
      },
      {
        path: 'cadastro',
        loadComponent: () =>
          import('./features/auth/cadastro/cadastro.component')
            .then(m => m.CadastroComponent)
      }
    ]
  },

  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout.component')
        .then(m => m.MainLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'transferencia',
        loadComponent: () =>
          import('./features/transferencia/transferencia.component')
            .then(m => m.TransferenciaComponent)
      },
      {
        path: 'extrato',
        loadComponent: () =>
          import('./features/extrato/extrato.component')
            .then(m => m.ExtratoComponent)
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./features/perfil/perfil.component')
            .then(m => m.PerfilComponent)
      }
    ]
  }
];
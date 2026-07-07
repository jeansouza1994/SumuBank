import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },

  {
    path: 'splash',
    loadComponent: () =>
      import('./features/splash/splash')
        .then(m => m.Splash)
  },

  // Layout de autenticação
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout').then(
        (m) => m.AuthLayout
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login').then(
            (m) => m.Login
          )
      },
      {
        path: 'cadastro',
        loadComponent: () =>
          import('./features/auth/cadastro/cadastro').then(
            (m) => m.Cadastro
          )
      }
    ]
  },

  // Layout principal
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout').then(
        (m) => m.MainLayout
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then(
            (m) => m.Dashboard
          )
      },
      {
        path: 'deposito',
        loadComponent: () =>
          import('./features/deposito/deposito').then(
            (m) => m.Deposito
          )
      },
      {
        path: 'transferencia',
        loadComponent: () =>
          import('./features/transferencia/transferencia').then(
            (m) => m.Transferencia
          )
      },
      {
        path: 'extrato',
        loadComponent: () =>
          import('./features/extrato/extrato').then(
            (m) => m.Extrato
          )
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./features/perfil/perfil').then(
            (m) => m.Perfil
          )
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];
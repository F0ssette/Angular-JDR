import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Liste des Composants
import { ListComponent as Weakness} from './Elements/Weakness/list/list.component';



const routes: Routes = [
  {
    path: 'weakness',
    children:
      [
        { path: '', component: Weakness }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

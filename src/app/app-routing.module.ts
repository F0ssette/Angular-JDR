import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Liste des Composants
import { ListComponent as Weakness} from './Elements/Weakness/list/list.component';
import { AddComponent as WeaknessAdd} from './Elements/Weakness/add/add.component';
import { EditComponent as WeaknessEdit} from './Elements/Weakness/edit/edit.component';


const routes: Routes = [
  {
    path: 'weakness',
    children:
      [
        { path: '', component: Weakness },
        { path: 'new', component: WeaknessAdd },
        { path: 'edit/:id', component: WeaknessEdit }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

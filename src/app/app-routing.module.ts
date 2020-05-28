import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Liste des Composants
import { ListComponent as Weakness} from './Elements/Weakness/list/list.component';
import { AddComponent as WeaknessAdd} from './Elements/Weakness/add/add.component';
import { EditComponent as WeaknessEdit} from './Elements/Weakness/edit/edit.component';
import { ListComponent as Story} from './Elements/Story/list/list.component';
import { AddComponent as StoryAdd} from './Elements/Story/add/add.component';
import { EditComponent as StoryEdit } from './Elements/Story/edit/edit.component';
import { ListComponent as Power} from './Elements/Power/list/list.component';
import { AddComponent as PowerAdd} from './Elements/Power/add/add.component';
import { EditComponent as PowerEdit} from './Elements/Power/edit/edit.component';
import { ListComponent as Nemesis} from './Elements/Nemesis/list/list.component';
import { AddComponent as NemesisAdd} from './Elements/Nemesis/add/add.component';
import { EditComponent as NemesisEdit} from './Elements/Nemesis/edit/edit.component';
import { ListComponent as Improvement } from './Elements/Improvement/list/list.component';
import { AddComponent as ImprovementAdd} from './Elements/Improvement/add/add.component';
import { EditComponent as ImprovementEdit} from './Elements/Improvement/edit/edit.component';

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
  {
    path: 'story',
    children:
      [
        { path: '', component: Story },
        { path: 'new', component: StoryAdd },
        { path: 'edit/:id', component: StoryEdit }
      ]
  },
  {
    path: 'power',
    children:
      [
        { path: '', component: Power },
        { path: 'new', component: PowerAdd },
        { path: 'edit/:id', component: PowerEdit }
      ]
  },
  {
    path: 'nemesis',
    children:
      [
        { path: '', component: Nemesis },
        { path: 'new', component: NemesisAdd },
        { path: 'edit/:id', component: NemesisEdit }
      ]
  },
  {
    path: 'improvement',
    children:
      [
        { path: '', component: Improvement },
        { path: 'new', component: ImprovementAdd },
        { path: 'edit/:id', component: ImprovementEdit }
      ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

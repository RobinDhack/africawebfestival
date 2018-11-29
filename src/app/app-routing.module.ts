import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'none', loadChildren: './none/none.module#NonePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'tips', loadChildren: './tips/tips.module#TipsPageModule' },
  { path: 'webCourse', loadChildren: './web-course/web-course.module#WebCoursePageModule' },
  { path: 'comCourse', loadChildren: './com-course/com-course.module#ComCoursePageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },
  { path: 'article1', loadChildren: './article1/article1.module#Article1PageModule' },
  { path: 'article2', loadChildren: './article2/article2.module#Article2PageModule' },
  { path: 'article3', loadChildren: './article3/article3.module#Article3PageModule' },
  { path: 'festival', loadChildren: './festival/festival.module#FestivalPageModule' },
  { path: 'speakers', loadChildren: './speakers/speakers.module#SpeakersPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

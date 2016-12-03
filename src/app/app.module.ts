import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IndexContainer } from './index/index-container.component';
import { TitleComponent } from './index/title.component';

import { DocsComponent } from './docs/docs.component';
import { DocsBox } from './docs/docs-box.component';
// import { DemoComponent } from './demo/demo.component';
import { NotFoundComponent } from './404/not-found.component';

// import { DemoAppComponent } from './demo/tictactoe/app.component';
// import { BoardComponent } from './demo/tictactoe/board.component';
// import { SquareComponent } from './demo/tictactoe/square.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'docs', component: DocsComponent },
  // { path: 'demos', component: DemoComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    // DemoAppComponent,
    // BoardComponent,
    // SquareComponent,
    IndexComponent,
    IndexContainer,
    TitleComponent,
    DocsBox,
    DocsComponent,
    // DemoComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

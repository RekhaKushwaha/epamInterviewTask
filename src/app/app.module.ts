import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CounterBtnComponent } from './counter-btn/counter-btn.component';

// Add an import to the component pointing to the place where it was created

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ContentComponent,
    CounterBtnComponent,
    FooterComponent,
    // Add the components name to the module declarations
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

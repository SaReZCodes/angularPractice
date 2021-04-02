import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import { persistState } from '@datorama/akita';

// const storage = persistState();

if (environment.production) {
  enableProdMode();
}
//const providers = [{ provide: 'persistStorage', useValue: storage }];
//send providers to  platformBrowserDynamic for save data in localStorage
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

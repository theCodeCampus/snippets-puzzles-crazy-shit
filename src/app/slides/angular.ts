import { Component } from '@angular/core';

@Component({
  template: `
    <tcc-master-regular headline="Splash Screen">
      <div>
        <pre markdown>
          * Beim Start der Anwendung müssen Daten geladen werden
          * Anwendung soll Splash-Screen anzeigen bis Daten geladen wurden
        </pre>
        <tcc-code language="html" [code]="splashScreen" headline="index.html"></tcc-code>
      </div>
    </tcc-master-regular>
  `
})
export class AppInitializerSlide1 {
  splashScreen = `
<app-root>
  <div class="loading-spinner"></div>
  Loading, please wait ...
</app-root>
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Splash Screen">
       <tcc-code language="typescript" [code]="appInitializer"></tcc-code>
    </tcc-master-regular>
  `
})
export class AppInitializerSlide2 {
  appInitializer = `
export function loadUserFactory(service: UserService) {
  return () => {
    return service.getUser().pipe(first()).toPromise();
  };
}
  
@NgModule({
  providers: [
    { provide: APP_INITIALIZER,
     multi: true,
     useFactory: loadUserFactory,
     deps: [UserService],
    }
  ]
})
export class AppModule {}
  `;
}


@Component({
  template: `
    <tcc-master-regular headline="Splash Screen">
      <div>
        <pre markdown>
          * Wie wäre es mit einem Interface?
        </pre>
        <tcc-code language="typescript" [code]="appInitializer"></tcc-code>
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class AppInitializerSlide3 {
  appInitializer = `
export class UserInitializer implements AppInitializer<User> {
  constructor(private readonly service: UserService) {}
  
  initialize(): Observable<User> | Promise<User> | User {
    return this.service.getUser();
  }
}
  
@NgModule({
  providers: [
    { provide: APP_INITIALIZER,
      multi: true,
      useClass: UserInitializer,
    }
  ]
})
export class AppModule {}
  `;
}

export const angularSlides = [
  AppInitializerSlide1,
  AppInitializerSlide2,
  AppInitializerSlide3,
];

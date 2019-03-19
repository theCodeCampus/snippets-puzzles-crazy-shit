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

export const appInitializerSlides = [
  AppInitializerSlide1,
  AppInitializerSlide2,
  AppInitializerSlide3,
];


@Component({
  template: `
    <tcc-master-regular headline="WTF">
      <div>
        <h2>Angular hat WTF gleich direkt ins Framework eingebaut</h2>
        <div style="text-align: center">
          <img src="assets/images/angular-wtf.png" style="height: 50vh">
        </div>
      </div>
    </tcc-master-regular>
  `
})
export class AngularWtfSlide1 {}


@Component({
  template: `
    <tcc-master-regular headline="WTF">
      <div style="text-align: center">
        <h2><a href="https://google.github.io/tracing-framework/" target="_blank">Web Tracing Framework</a></h2>
        <img src="assets/images/web-tracing-framework.png" style="height: 70vh">
      </div>
    </tcc-master-regular>
  `
})
export class AngularWtfSlide2 {}


@Component({
  template: `
    <tcc-master-regular headline="WTF">
      <div style="text-align: center">
        <h2>Angular CLI + Bazel</h2>
        <img src="assets/images/bazel-performance.png" style="height: 65vh">
      </div>
    </tcc-master-regular>
  `
})
export class AngularWtfSlide3 {}



export const wtfSlides = [
  AngularWtfSlide1,
  AngularWtfSlide2,
  AngularWtfSlide3,
];

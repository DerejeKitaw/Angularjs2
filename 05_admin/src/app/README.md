```bash
# Setting up firebase

01_ Go to [firebase](https://firebase.google.com/docs/)

02_Go to console (https://console.firebase.google.com/u/0/?pli=1)

03_Create new project
e.g "mydemoproj"

04_Enable password Autentication
    Autentication - >chose signIn method -> enable Email/Password

05_Go to project setting gear icon

- then add Firebase to your app

- Copy script tag information

06_Install firebase
    npm install firebase --save
    or
    npm install --save angularfire2 firebase

07_Import firebase 
    Open src/environments/environment.ts and add a key firebase to the exported constant:

    export const environment = {
    production: false,
    firebase: {
        apiKey: 'your-api-key',
        authDomain: 'your-auth-domain',
        databaseURL: 'your-database-url',
        storageBucket: 'your-storage-bucket',
    }
    };
08_import { AngularFireModule } from 'angularfire2';
    import { environment } from '../environments/environment';
    To initialize AngularFire add the following line to the imports array inside the NgModule:

    @NgModule({
    // declarations
    imports: [
        // BrowserModule, etc
        AngularFireModule.initializeApp(environment.firebase),
    ]
    // providers
    // bootstrap
    })


```
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthService } from './admin-service/auth.service';
import { FirebaseModule } from './admin-service/firebase.module';



@NgModule( {
  imports: [FirebaseModule],
  declarations: [],
  exports: [],
  providers: [AuthService]
} )
export class AdminModule {
  // Ensure that CoreModule is only loaded into AppModule
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: AdminModule ) {
    if ( parentModule ) {
      const msg = 'CoreModule has already been loaded. Import CoreModule once, only, in the root AppModule.';
      throw new Error( msg );
    }
  }
}

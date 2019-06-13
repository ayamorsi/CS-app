import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { DirectivesHasRoleDirective } from './directives-has-role/directives-has-role';
import { DirectivesSharedDirectivesDirective } from './directives-shared-directives/directives-shared-directives';
@NgModule({
	declarations: [DirectivesHasRoleDirective,
    DirectivesSharedDirectivesDirective],
	imports: [],
	exports: [DirectivesHasRoleDirective,
    DirectivesSharedDirectivesDirective]
=======
import { DropZoneDirective } from './drop-zone/drop-zone';
@NgModule({
	declarations: [DropZoneDirective],
	imports: [],
	exports: [DropZoneDirective]
>>>>>>> 5820d1fca5a5fa5de270932e24f362a8fb6cbd76
})
export class DirectivesModule {}

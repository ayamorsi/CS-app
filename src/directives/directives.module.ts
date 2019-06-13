import { NgModule } from '@angular/core';
import { DirectivesHasRoleDirective } from './directives-has-role/directives-has-role';
import { DirectivesSharedDirectivesDirective } from './directives-shared-directives/directives-shared-directives';
@NgModule({
	declarations: [DirectivesHasRoleDirective,
    DirectivesSharedDirectivesDirective],
	imports: [],
	exports: [DirectivesHasRoleDirective,
    DirectivesSharedDirectivesDirective]
})
export class DirectivesModule {}

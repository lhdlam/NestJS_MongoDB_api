import { createParamDecorator, ExecutionContext} from '@nestjs/common'
import { User } from './models/user.model';

/**
 * customer auth user
 */

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): User => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});


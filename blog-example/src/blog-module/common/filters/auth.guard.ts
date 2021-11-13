import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly config: ConfigService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateBasicAuth(request);
  }

  validateBasicAuth(req: any):boolean {
    if(!req || !req.headers || !req.headers.authorization)
        return false

    if(req.headers.authorization !== this.config.get<string>('APP_BASIC_AUTH'))
        return false;

    return true;
  }
}
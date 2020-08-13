import Authentication from '../interfaces/Authentication';
import localVarRequest from 'request';

export default class VoidAuth implements Authentication {
  public username: string = '';
  public password: string = '';

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

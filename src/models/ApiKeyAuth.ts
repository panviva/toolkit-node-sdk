import Authentication from '../interfaces/Authentication';
import localVarRequest from 'request';

export default class ApiKeyAuth implements Authentication {
    public apiKey: string = '';
  
    constructor(private location: string, private paramName: string) {}
  
    applyToRequest(requestOptions: localVarRequest.Options): void {
      if (this.location === 'query') {
        requestOptions.qs[this.paramName] = this.apiKey;
      } else if (this.location === 'header' && requestOptions && requestOptions.headers) {
        requestOptions.headers[this.paramName] = this.apiKey;
      }
    }
  }
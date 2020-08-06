import Link from './Link';
import ResourceSearchResult from './ResourceSearchResult';

export default class GetSearchResponse {
    'results'?: (ResourceSearchResult)[];
    'total'?: number;
    'links'?: (Link)[];
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'results',
        baseName: 'results',
        type: '(ResourceSearchResult)[]',
      },
      {
        name: 'total',
        baseName: 'total',
        type: 'number',
      },
      {
        name: 'links',
        baseName: 'links',
        type: '(Link)[]',
      },
    ];
  
    static getAttributeTypeMap() {
      return GetSearchResponse.attributeTypeMap;
    }
  }
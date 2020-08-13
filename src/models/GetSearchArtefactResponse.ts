import Facet from './Facet';
import SearchResult from './SearchResult';

export default class GetSearchArtefactResponse {
  'facets'?: Facet[];
  'results'?: SearchResult[];
  'total'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'facets',
      baseName: 'facets',
      type: '(Facet)[]',
    },
    {
      name: 'results',
      baseName: 'results',
      type: '(SearchResult)[]',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
    },
  ];

  static getAttributeTypeMap() {
    return GetSearchArtefactResponse.attributeTypeMap;
  }
}

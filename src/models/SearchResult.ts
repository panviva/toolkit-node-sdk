import ResponseSection from './ResponseSection';
import Category from './Category';
import MetaDataValueDetails from './MetaDataValueDetails';
import Link from './Link';
import QueryVariation from './QueryVariation';

export default class SearchResult {
    'id'?: string;
    'content'?: (ResponseSection)[];
    'category'?: Category;
    'metaData'?: { [key: string]: MetaDataValueDetails };
    'searchScore'?: number;
    'links'?: (Link)[];
    'queryVariations'?: (QueryVariation)[];
    'primaryQuery'?: string;
    'panvivaDocumentId'?: number;
    'panvivaDocumentVersion'?: number;
    'title'?: string;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'id',
        baseName: 'id',
        type: 'string',
      },
      {
        name: 'content',
        baseName: 'content',
        type: '(ResponseSection)[]',
      },
      {
        name: 'category',
        baseName: 'category',
        type: 'Category',
      },
      {
        name: 'metaData',
        baseName: 'metaData',
        type: '{ [key: string]: MetaDataValueDetails; }',
      },
      {
        name: 'searchScore',
        baseName: 'searchScore',
        type: 'number',
      },
      {
        name: 'links',
        baseName: 'links',
        type: '(Link)[]',
      },
      {
        name: 'queryVariations',
        baseName: 'queryVariations',
        type: '(QueryVariation)[]',
      },
      {
        name: 'primaryQuery',
        baseName: 'primaryQuery',
        type: 'string',
      },
      {
        name: 'panvivaDocumentId',
        baseName: 'panvivaDocumentId',
        type: 'number',
      },
      {
        name: 'panvivaDocumentVersion',
        baseName: 'panvivaDocumentVersion',
        type: 'number',
      },
      {
        name: 'title',
        baseName: 'title',
        type: 'string',
      },
    ];
  
    static getAttributeTypeMap() {
      return SearchResult.attributeTypeMap;
    }
  }
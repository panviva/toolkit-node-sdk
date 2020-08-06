import Link from './Link';
import ResponseSection from './ResponseSection';
import ResponseVariation from './ResponseVariation';
import Category from './Category';
import QueryVariation from './QueryVariation';
import MetaDataValueDetails from './MetaDataValueDetails';

export default class GetResponseResponse {
    'links'?: (Link)[];
    'title'?: string;
    'content'?: (ResponseSection)[];
    'variations'?: (ResponseVariation)[];
    'category'?: Category;
    'primaryQuery'?: string;
    'queryVariations'?: (QueryVariation)[];
    'panvivaDocumentId'?: number;
    'panvivaDocumentVersion'?: number;
    'metaData'?: { [key: string]: MetaDataValueDetails };
    'id'?: string;
    'dateCreated'?: Date;
    'dateModified'?: Date;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'links',
        baseName: 'links',
        type: '(Link)[]',
      },
      {
        name: 'title',
        baseName: 'title',
        type: 'string',
      },
      {
        name: 'content',
        baseName: 'content',
        type: '(ResponseSection)[]',
      },
      {
        name: 'variations',
        baseName: 'variations',
        type: '(ResponseVariation)[]',
      },
      {
        name: 'category',
        baseName: 'category',
        type: 'Category',
      },
      {
        name: 'primaryQuery',
        baseName: 'primaryQuery',
        type: 'string',
      },
      {
        name: 'queryVariations',
        baseName: 'queryVariations',
        type: '(QueryVariation)[]',
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
        name: 'metaData',
        baseName: 'metaData',
        type: '{ [key: string]: MetaDataValueDetails; }',
      },
      {
        name: 'id',
        baseName: 'id',
        type: 'string',
      },
      {
        name: 'dateCreated',
        baseName: 'dateCreated',
        type: 'Date',
      },
      {
        name: 'dateModified',
        baseName: 'dateModified',
        type: 'Date',
      },
    ];
  
    static getAttributeTypeMap() {
      return GetResponseResponse.attributeTypeMap;
    }
  }
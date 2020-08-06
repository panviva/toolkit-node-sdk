import Tag from './Tag';

export default class GetFileResponse {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'version'?: number;
    'language'?: string;
    'tags'?: (Tag)[];
    'hidden'?: boolean;
    'source'?: string;
    'type'?: string;
    'content'?: string;
    'fileName'?: string;
    'release'?: number;
    'released'?: boolean;
    'copyright'?: string;
    'classification'?: string;
    'status'?: string;
    'percentage'?: number;
    'releaseDate'?: Date;
    'keywords'?: (string)[];
    'cshKeywords'?: (string)[];
    'changeNote'?: string;
    'updatedDate'?: Date;
    'createdDate'?: Date;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'id',
        baseName: 'id',
        type: 'string',
      },
      {
        name: 'name',
        baseName: 'name',
        type: 'string',
      },
      {
        name: 'description',
        baseName: 'description',
        type: 'string',
      },
      {
        name: 'version',
        baseName: 'version',
        type: 'number',
      },
      {
        name: 'language',
        baseName: 'language',
        type: 'string',
      },
      {
        name: 'tags',
        baseName: 'tags',
        type: '(Tag)[]',
      },
      {
        name: 'hidden',
        baseName: 'hidden',
        type: 'boolean',
      },
      {
        name: 'source',
        baseName: 'source',
        type: 'string',
      },
      {
        name: 'type',
        baseName: 'type',
        type: 'string',
      },
      {
        name: 'content',
        baseName: 'content',
        type: 'string',
      },
      {
        name: 'fileName',
        baseName: 'fileName',
        type: 'string',
      },
      {
        name: 'release',
        baseName: 'release',
        type: 'number',
      },
      {
        name: 'released',
        baseName: 'released',
        type: 'boolean',
      },
      {
        name: 'copyright',
        baseName: 'copyright',
        type: 'string',
      },
      {
        name: 'classification',
        baseName: 'classification',
        type: 'string',
      },
      {
        name: 'status',
        baseName: 'status',
        type: 'string',
      },
      {
        name: 'percentage',
        baseName: 'percentage',
        type: 'number',
      },
      {
        name: 'releaseDate',
        baseName: 'releaseDate',
        type: 'Date',
      },
      {
        name: 'keywords',
        baseName: 'keywords',
        type: '(string)[]',
      },
      {
        name: 'cshKeywords',
        baseName: 'cshKeywords',
        type: '(string)[]',
      },
      {
        name: 'changeNote',
        baseName: 'changeNote',
        type: 'string',
      },
      {
        name: 'updatedDate',
        baseName: 'updatedDate',
        type: 'Date',
      },
      {
        name: 'createdDate',
        baseName: 'createdDate',
        type: 'Date',
      },
    ];
  
    static getAttributeTypeMap() {
      return GetFileResponse.attributeTypeMap;
    }
  }
import StringInt64NullableKeyValuePair from './StringInt64NullableKeyValuePair';

export default class Facet {
    'field'?: string;
    'groups'?: (StringInt64NullableKeyValuePair)[];
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'field',
        baseName: 'field',
        type: 'string',
      },
      {
        name: 'groups',
        baseName: 'groups',
        type: '(StringInt64NullableKeyValuePair)[]',
      },
    ];
  
    static getAttributeTypeMap() {
      return Facet.attributeTypeMap;
    }
  }
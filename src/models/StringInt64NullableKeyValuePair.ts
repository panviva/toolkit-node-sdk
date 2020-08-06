export default class StringInt64NullableKeyValuePair {
    'key'?: string;
    'value'?: number;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'key',
        baseName: 'key',
        type: 'string',
      },
      {
        name: 'value',
        baseName: 'value',
        type: 'number',
      },
    ];
  
    static getAttributeTypeMap() {
      return StringInt64NullableKeyValuePair.attributeTypeMap;
    }
  }
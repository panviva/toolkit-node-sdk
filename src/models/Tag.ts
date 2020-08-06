export default class Tag {
    'name'?: string;
    'value'?: string;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'name',
        baseName: 'name',
        type: 'string',
      },
      {
        name: 'value',
        baseName: 'value',
        type: 'string',
      },
    ];
  
    static getAttributeTypeMap() {
      return Tag.attributeTypeMap;
    }
  }
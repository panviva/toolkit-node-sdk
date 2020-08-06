export default class Container {
    'id'?: string;
    'name'?: string;
    'body'?: string;
  
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
        name: 'body',
        baseName: 'body',
        type: 'string',
      },
    ];
  
    static getAttributeTypeMap() {
      return Container.attributeTypeMap;
    }
  }
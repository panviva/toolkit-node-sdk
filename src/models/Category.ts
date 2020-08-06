export default class Category {
    'name'?: string;
    'id'?: number;
    'dateCreated'?: Date;
    'dateModified'?: Date;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'name',
        baseName: 'name',
        type: 'string',
      },
      {
        name: 'id',
        baseName: 'id',
        type: 'number',
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
      return Category.attributeTypeMap;
    }
  }
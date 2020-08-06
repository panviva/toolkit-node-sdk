export default  class ArtefactCategory {
    'id'?: number;
    'categoryName'?: string;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'id',
        baseName: 'id',
        type: 'number',
      },
      {
        name: 'categoryName',
        baseName: 'categoryName',
        type: 'string',
      },
    ];
  
    static getAttributeTypeMap() {
      return ArtefactCategory.attributeTypeMap;
    }
  }
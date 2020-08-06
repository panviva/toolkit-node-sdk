export default class PostArtefactCategoryRequest {
    'name'?: string;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'name',
        baseName: 'name',
        type: 'string',
      },
    ];
  
    static getAttributeTypeMap() {
      return PostArtefactCategoryRequest.attributeTypeMap;
    }
  }
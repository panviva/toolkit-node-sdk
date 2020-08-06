import Resource from './Resource';

export default class GetFolderChildrenResponse {
    'children'?: (Resource)[];
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'children',
        baseName: 'children',
        type: 'Array<Resource>',
      },
    ];
  
    static getAttributeTypeMap() {
      return GetFolderChildrenResponse.attributeTypeMap;
    }
  }
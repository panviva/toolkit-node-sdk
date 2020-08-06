import Folder from './Folder';

export default class GetFolderTranslationsResponse {
    'translations'?: (Folder)[];
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'translations',
        baseName: 'translations',
        type: 'Array<Folder>',
      },
    ];
  
    static getAttributeTypeMap() {
      return GetFolderTranslationsResponse.attributeTypeMap;
    }
  }
import ArtefactCategory from './ArtefactCategory';

export default class GetArtefactCategoriesResponse {
    'categories'?: (ArtefactCategory)[];
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'categories',
        baseName: 'categories',
        type: '(ArtefactCategory)[]',
      },
    ];
  
    static getAttributeTypeMap() {
      return GetArtefactCategoriesResponse.attributeTypeMap;
    }
  }
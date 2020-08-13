export default class PostArtefactCategoryResponse {
  'categoryId'?: number;
  'categoryName'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'categoryId',
      baseName: 'categoryId',
      type: 'number',
    },
    {
      name: 'categoryName',
      baseName: 'categoryName',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return PostArtefactCategoryResponse.attributeTypeMap;
  }
}

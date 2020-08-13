export default class GetImageResponse {
  'id'?: string;
  'name'?: string;
  'width'?: number;
  'height'?: number;
  'size'?: number;
  'contentType'?: string;
  'content'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
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
      name: 'width',
      baseName: 'width',
      type: 'number',
    },
    {
      name: 'height',
      baseName: 'height',
      type: 'number',
    },
    {
      name: 'size',
      baseName: 'size',
      type: 'number',
    },
    {
      name: 'contentType',
      baseName: 'contentType',
      type: 'string',
    },
    {
      name: 'content',
      baseName: 'content',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return GetImageResponse.attributeTypeMap;
  }
}

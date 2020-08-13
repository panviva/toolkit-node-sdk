import Tag from './Tag';

export default class Resource {
  'id'?: string;
  'name'?: string;
  'description'?: string;
  'version'?: number;
  'language'?: string;
  'tags'?: Tag[];
  'hidden'?: boolean;
  'source'?: string;
  'type'?: string;

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
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'version',
      baseName: 'version',
      type: 'number',
    },
    {
      name: 'language',
      baseName: 'language',
      type: 'string',
    },
    {
      name: 'tags',
      baseName: 'tags',
      type: '(Tag)[]',
    },
    {
      name: 'hidden',
      baseName: 'hidden',
      type: 'boolean',
    },
    {
      name: 'source',
      baseName: 'source',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return Resource.attributeTypeMap;
  }
}

import Link from './Link';

export default class ResourceSearchResult {
  'type'?: string;
  'id'?: string;
  'name'?: string;
  'description'?: string;
  'matchedFields'?: string[];
  'snippet'?: string;
  'language'?: string;
  'links'?: Link[];

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
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
      name: 'matchedFields',
      baseName: 'matchedFields',
      type: '(string)[]',
    },
    {
      name: 'snippet',
      baseName: 'snippet',
      type: 'string',
    },
    {
      name: 'language',
      baseName: 'language',
      type: 'string',
    },
    {
      name: 'links',
      baseName: 'links',
      type: '(Link)[]',
    },
  ];

  static getAttributeTypeMap() {
    return ResourceSearchResult.attributeTypeMap;
  }
}

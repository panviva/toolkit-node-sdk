export default class QueryVariation {
  'id'?: number;
  'query'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
    },
    {
      name: 'query',
      baseName: 'query',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return QueryVariation.attributeTypeMap;
  }
}

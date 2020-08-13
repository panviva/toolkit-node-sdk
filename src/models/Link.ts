export default class Link {
  'href'?: string;
  'rel'?: string;
  'type'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'href',
      baseName: 'href',
      type: 'string',
    },
    {
      name: 'rel',
      baseName: 'rel',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return Link.attributeTypeMap;
  }
}

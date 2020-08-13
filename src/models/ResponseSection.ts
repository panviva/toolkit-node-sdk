export default class ResponseSection {
  'mediaType'?: string;
  'text'?: string;
  'href'?: string;
  'resourceLocation'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'mediaType',
      baseName: 'mediaType',
      type: 'string',
    },
    {
      name: 'text',
      baseName: 'text',
      type: 'string',
    },
    {
      name: 'href',
      baseName: 'href',
      type: 'string',
    },
    {
      name: 'resourceLocation',
      baseName: 'resourceLocation',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return ResponseSection.attributeTypeMap;
  }
}

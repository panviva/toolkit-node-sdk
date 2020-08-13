export default class MetaDataValueDetails {
  'values'?: string[];
  'dataType'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'values',
      baseName: 'values',
      type: '(string)[]',
    },
    {
      name: 'dataType',
      baseName: 'dataType',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return MetaDataValueDetails.attributeTypeMap;
  }
}

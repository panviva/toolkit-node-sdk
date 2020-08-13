export default class ContainerRelationship {
  'id'?: string;
  'parent'?: string;
  'children'?: string[];
  'taskFlow'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'parent',
      baseName: 'parent',
      type: 'string',
    },
    {
      name: 'children',
      baseName: 'children',
      type: '(string)[]',
    },
    {
      name: 'taskFlow',
      baseName: 'taskFlow',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return ContainerRelationship.attributeTypeMap;
  }
}

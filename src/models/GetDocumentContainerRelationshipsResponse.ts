import ContainerRelationship from './ContainerRelationship';

export default class GetDocumentContainerRelationshipsResponse {
  'relationships'?: ContainerRelationship[];

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'relationships',
      baseName: 'relationships',
      type: '(ContainerRelationship)[]',
    },
  ];

  static getAttributeTypeMap() {
    return GetDocumentContainerRelationshipsResponse.attributeTypeMap;
  }
}

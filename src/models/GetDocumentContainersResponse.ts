import Container from './Container';

export default class GetDocumentContainersResponse {
  'containers'?: Container[];

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'containers',
      baseName: 'containers',
      type: '(Container)[]',
    },
  ];

  static getAttributeTypeMap() {
    return GetDocumentContainersResponse.attributeTypeMap;
  }
}

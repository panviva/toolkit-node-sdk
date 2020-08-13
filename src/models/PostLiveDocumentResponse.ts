export default class PostLiveDocumentResponse {
  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [];

  static getAttributeTypeMap() {
    return PostLiveDocumentResponse.attributeTypeMap;
  }
}

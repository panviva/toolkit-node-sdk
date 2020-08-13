export default class PostLiveCshResponse {
  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [];

  static getAttributeTypeMap() {
    return PostLiveCshResponse.attributeTypeMap;
  }
}

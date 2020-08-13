export default class PostLiveSearchResponse {
  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [];

  static getAttributeTypeMap() {
    return PostLiveSearchResponse.attributeTypeMap;
  }
}

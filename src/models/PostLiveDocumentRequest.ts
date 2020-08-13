export default class PostLiveDocumentRequest {
  /**
   * The Panviva user to whom you wish to send the result. (Note: Use username OR userId, not both.)
   */
  'username'?: string;
  /**
   * The numeric ID of the user to whom you wish to send the result. (Note: Use username OR userId, not both.)
   */
  'userId'?: string;
  /**
   * The Document ID of the Panviva Document you wish to send.
   */
  'id'?: string;
  /**
   * The Section ID you would like the user to see, when the specified document is opened.
   */
  'location'?: string;
  /**
   * True/False depending on whether you want the Panviva client to maximize on the user's desktop, when the document is delivered.
   */
  'maximizeClient'?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'username',
      baseName: 'username',
      type: 'string',
    },
    {
      name: 'userId',
      baseName: 'userId',
      type: 'string',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'location',
      baseName: 'location',
      type: 'string',
    },
    {
      name: 'maximizeClient',
      baseName: 'maximizeClient',
      type: 'boolean',
    },
  ];

  static getAttributeTypeMap() {
    return PostLiveDocumentRequest.attributeTypeMap;
  }
}

export default class PostLiveSearchRequest {
  /**
   * The Panviva user to whom you wish to send the result. (Note: Use username OR userId, not both.)
   */
  'username'?: string;
  /**
   * The numeric ID of the user to whom you wish to send the result. (Note: Use username OR userId, not both.)
   */
  'userId'?: string;
  /**
   * The term to search for.
   */
  'query'?: string;
  /**
   * True/False depending on whether you want the Panviva client to maximize on the user's desktop, when the document is delivered.
   */
  'maximizeClient'?: boolean;
  /**
   * True to immediately open the first document found, or false to show the list of results.
   */
  'showFirstResult'?: boolean;

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
      name: 'query',
      baseName: 'query',
      type: 'string',
    },
    {
      name: 'maximizeClient',
      baseName: 'maximizeClient',
      type: 'boolean',
    },
    {
      name: 'showFirstResult',
      baseName: 'showFirstResult',
      type: 'boolean',
    },
  ];

  static getAttributeTypeMap() {
    return PostLiveSearchRequest.attributeTypeMap;
  }
}

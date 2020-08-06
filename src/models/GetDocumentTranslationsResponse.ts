export default class GetDocumentTranslationsResponse {
    'translations'?: (Document)[];
    'origin'?: string;
  
    static discriminator: string | undefined = undefined;
  
    static attributeTypeMap: ({ name: string; baseName: string; type: string })[] = [
      {
        name: 'translations',
        baseName: 'translations',
        type: '(Document)[]',
      },
      {
        name: 'origin',
        baseName: 'origin',
        type: 'string',
      },
    ];
  
    static getAttributeTypeMap() {
      return GetDocumentTranslationsResponse.attributeTypeMap;
    }
  }
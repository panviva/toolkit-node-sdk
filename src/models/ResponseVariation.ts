import ResponseSection from './ResponseSection';
import Channel from './Channel';

export default class ResponseVariation {
  'content'?: ResponseSection[];
  'channels'?: Channel[];
  'id'?: number;
  'dateCreated'?: Date;
  'dateModified'?: Date;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'content',
      baseName: 'content',
      type: '(ResponseSection)[]',
    },
    {
      name: 'channels',
      baseName: 'channels',
      type: '(Channel)[]',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
    },
    {
      name: 'dateCreated',
      baseName: 'dateCreated',
      type: 'Date',
    },
    {
      name: 'dateModified',
      baseName: 'dateModified',
      type: 'Date',
    },
  ];

  static getAttributeTypeMap() {
    return ResponseVariation.attributeTypeMap;
  }
}

export default class Training {
  'failureFeedback'?: string;
  'forcePageSequence'?: boolean;
  'forceQuestionSequence'?: boolean;
  'passingScore'?: number;
  'successFeedback'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: { name: string; baseName: string; type: string }[] = [
    {
      name: 'failureFeedback',
      baseName: 'failureFeedback',
      type: 'string',
    },
    {
      name: 'forcePageSequence',
      baseName: 'forcePageSequence',
      type: 'boolean',
    },
    {
      name: 'forceQuestionSequence',
      baseName: 'forceQuestionSequence',
      type: 'boolean',
    },
    {
      name: 'passingScore',
      baseName: 'passingScore',
      type: 'number',
    },
    {
      name: 'successFeedback',
      baseName: 'successFeedback',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return Training.attributeTypeMap;
  }
}

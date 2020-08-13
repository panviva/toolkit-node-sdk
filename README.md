# Panviva SDK

![npm](https://img.shields.io/npm/dm/@panviva/node-sdk) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@panviva/node-sdk) ![npm (scoped)](https://img.shields.io/npm/v/@panviva/node-sdk)

## **Introduction**

Wouldn't it be great if you could share information seamlessly? This JavaScript SDK allows you to push your knowledge further and consume a complete list of Panviva's API offerings within your application. This is a simple NPM package provided by [Panviva](https://www.panviva.com) to help streamline integration with Panviva APIs within JavaScript environments.

## **Prerequisites**

### To use the Panviva SDK, you must have:

1. Access to a Panviva instance (also known as a tenant)
2. A developer account on the Panviva developer portal ([dev.panviva.com](https://dev.panviva.com))
3. An active Panviva API subscription (also known as an API plan) and valid Panviva API credentials

If you are not a customer or need help visit [www.panviva.com/support](https://www.panviva.com/support).

### How to get credentials

Follow the steps below to get your API key & instance name.

To get your API key you must:

1. Sign into the Panviva developer portal at [dev.panviva.com](https://dev.panviva.com)
2. Navigate to your profile (click your name then click "Profile" from the top navigation bar)
3. Your should now see your API key under "Your Subscriptions" section of your profile.

To get your instance name you must:

1. Sign into the Panviva developer portal at [dev.panviva.com](https://dev.panviva.com)
2. Navigate to your API (click "APIs" from the top navigation bar)
3. You should now see your API instance under your API suite (look for "_The instance name for the API Suite is_")

## Installation

To install [@panviva/node-sdk](https://www.npmjs.com/package/@panviva/node-sdk):

```sh
# Run this command in your project root
# with npm
npm install --save @panviva/node-sdk

# with yarn
yarn add @panviva/node-sdk
```

Set up:

```js
const { PanvivaClient, ResourceApiKeys } = require('@panviva/node-sdk');

const panvivaClient = new PanvivaClient('_Your instance name here_');
// You can provide a base URL as the second argument, it defaults to `https://api.panviva.com`

panvivaClient.setApiKey(ResourceApiKeys.apiKeyHeader, '_Your API key_');
```

Example request:

```js
panvivaClient
  .searchArtefacts({ simplequery: '*' })
  .then((response) => {
    console.log(response);
  })
  .catch((ex) => console.error(ex));
```

## **Available client methods**

<br>

<table>
    <thead>
        <tr>
            <th>Method Name</th>
            <th>Parameter Name</th>
            <th>Parameter Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>getArtefactById</td>
            <td>id</td>
            <td>string</td>
            <td>The id (ID) of an artefact</td>
        </tr>
        <tr>
            <td>getArtefactCategories</td>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
        <tr>
            <td rowspan="2" valign="top">getArtefactCategoryPost</td>
            <td>postArtefactCategoryRequest</td>
            <td>PostArtefactCategoryRequest</td>
            <td>JSON object containing the category name</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
        <tr>
            <td rowspan="2" valign="top">getContainerById</td>
            <td>id</td>
            <td>string</td>
            <td>The id of a document container</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
        <tr>
            <td rowspan="3" valign="top">getDocumentById</td>
            <td>id</td>
            <td>string</td>
            <td>A document unique identifier, Document ID. If a document is a translated document, this value represents Internal ID or IID in Panviva API v1.</td>
        </tr>
        <tr>
            <td>version (optional)</td>
            <td>integer</td>
            <td>Request the API to return a particular version of the specified document.</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
        <tr>
            <td rowspan="2" valign="top">getDocumentByIdContainers</td>
            <td>id</td>
            <td>string</td>
            <td>A document unique identifier, Document ID. If a document is a translated document, this value represents Internal ID or IID in Panviva API v1.</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Optional parameter to Override HTTP request options.</td>
        </tr>
        <tr>
            <td rowspan="2" valign="top">getDocumentByIdContainersRelationships</td>
            <td>id</td>
            <td>string</td>
            <td>A document unique identifier, Document ID. If a document is a translated document, this value represents Internal ID or IID in Panviva API v1.</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
         <tr>
            <td>getDocumentByIdTranslations</td>
            <td>id</td>
            <td>string</td>
            <td>A document unique identifier, Document ID. If a document is a translated document, this value represents Internal ID or IID in Panviva API v1.</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
         <tr>
            <td>getFileById</td>
            <td>id</td>
            <td>string</td>
            <td>The internal id (IID) of a Panviva file (external document)</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
        <tr>
            <td rowspan="2" valign="top">getDocumentByIdContainers</td>
            <td>id</td>
            <td>string</td>
            <td>A document unique identifier, Document ID. If a document is a translated document, this value represents Internal ID or IID in Panviva API v1.</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
         <tr>
            <td rowspan="2" valign="top">getFolderById</td>
            <td>id</td>
            <td>string</td>
            <td>The internal id (IID) of a Panviva folder</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
         <tr>
            <td rowspan="2" valign="top">getFolderByIdChildren</td>
            <td>id</td>
            <td>string</td>
            <td>The internal id (IID) of a Panviva folder</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
         <tr>
            <td rowspan="2" valign="top">getFolderByIdTranslations</td>
            <td>id</td>
            <td>string</td>
            <td>The internal id (IID) of a Panviva folder</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
         <tr>
            <td>getFolderRoot</td>
            <td>id</td>
            <td>string</td>
            <td>The internal id (IID) of a Panviva folder</td>
        </tr>
         <tr>
            <td rowspan="2" valign="top">getImageById</td>
            <td>id</td>
            <td>string</td>
            <td>The id of a Panviva image</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
        <tr>
            <td rowspan="8" valign="top">searchArtefacts</td>
            <td>simplequery</td>
            <td>string</td>
            <td>Natural language query string. For example: Action Movies (Note: Use simplequery OR advancedquery, not both.)</td>
        </tr>
        <tr>
            <td>advancedquery</td>
            <td>string</td>
            <td> Query string written in Lucene query syntax. For example: films AND books\. (Note: Use simplequery OR advancedquery, not both.)</td>
        </tr>
        <tr>
            <td>filter (optional)</td>
            <td>string</td>
            <td> Accepts a Lucene-formatted filter string. Examples: category/name eq 'Mortgages', panvivaDocumentVersion gt '8' (Filterable fields include dateCreated, dateModified, dateDeleted, category/name, category/dateCreated, category/dateModified, metaData/keyword/values, metaData/keyword/dataType, title, primaryQuery, isDeleted, timestamp, panvivaDocumentId, panvivaDocumentVersion, id)</td>
        </tr>
         <tr>
            <td>channel (optional)</td>
            <td>string</td>
            <td> Return response for a specific channel, instead of the default </td>
        </tr>
        <tr>
            <td>pageOffset (optional)</td>
            <td>integer</td>
            <td> The pagination offset to denote the number of initial search results to skip. For example, pageOffset of 100 and pageLimit of 10 would return records 101-110.</td>
        </tr>
        <tr>
            <td>pageLimit (optional)</td>
            <td>any</td>
            <td> The number of records to return. Must be an integer between 0 and 1000. </td>
        </tr>
        <tr>
            <td>facet (optional)</td>
            <td>string</td>
            <td> Accepts a Lucene-formatted facet string. Examples: facet=metaData/keyword/values (Facetable fields include metaData/values) </td>
        </tr>   
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>    
        <tr>
            <td rowspan="2" valign="top">postLiveCsh</td>
            <td>postLiveCshRequest</td>
            <td>PostLiveCshRequest</td>
            <td> JSON object containing information required to perform a live activity</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
        <tr>
            <td rowspan="2" valign="top">postliveDocument</td>
            <td>postLiveDocumentRequest</td>
            <td>PostLiveDocumentRequest</td>
            <td> JSON object containing information required to perform a live activity</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr> 
        <tr>
            <td rowspan="2" valign="top">postLiveSearch</td>
            <td>postLiveSearchRequest</td>
            <td>PostLiveSearchRequest</td>
            <td> JSON object containing information required to perform a live activity</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr> 
        <tr>
            <td rowspan="4" valign="top">search</td>
            <td>term</td>
            <td>string</td>
            <td> The word or phrase to be searched for </td>
        </tr>
        <tr>
            <td>pageOffset (optional)</td>
            <td>integer</td>
            <td> The pagination offset to denote the number of initial search results to skip. For example, pageOffset of 100 and pageLimit of 10 would return records 101-110. </td>
        </tr>   
        <tr>
            <td>pageLimit (optional)</td>
            <td>integer</td>
            <td>The number of records to return. Must be an integer between 0 and 1000.</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override HTTP request options.</td>
        </tr>
    </tbody>
</table>

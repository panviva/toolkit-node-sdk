# Panviva.Sdk

## __Introduction__
 Wouldn't it be great if you could share information seamlessly? This JavaScipt sdk allows you to push your knowledge further and consume a complete list of Panviva's API offerings within your application. This is a simple NPM package provided by [Panviva Pty. Ltd.](https://www.panviva.com/) to help streamline integrations with Panviva APIs within JavaScript environments.

## __Prerequisites__
### To use the Panviva sdk, you must have:

1. Access to a Panviva instance (also known as a tenant)
2. A developer account on the Panviva developer portal ([dev.panviva.com](https://dev.panviva.com))
3. An active Panviva API subscription (also known as an API plan) and valid Panviva API credentials

If you are not a customer or need help visit [www.panviva.com/support](https://www.panviva.com/support).

### How to get credentials

Follow the steps below to get your API key & API instance.

If you see an error while using the connector you may look up the error code for more information. Note: the HTTP status code in the documentation may be slightly different than what you see in Power Automate or Power Apps, please use the Error Code field for lookup purposes.

To get your API key you must:

1. Sign into the Panviva developer portal at [dev.panviva.com](https://dev.panviva.com)
2. Navigate to your profile (click your name then click "Profile" from the top navigation bar)
3. Your should now see your API key under "Your Subscriptions" section of your profile.

To get your API instance you must:

1. Sign into the Panviva developer portal at [dev.panviva.com](https://dev.panviva.com)
2. Navigate to your API (click "APIs" from the top navigation bar)
3. You should now see your API instance under your API suite (look for "_The instance name for the API Suite is_")

## __Setup For PanvivaClient in a NodeJs environment__
### Setting up .Net Core project

1. Install the panviva.sdk package into node_modules and save it as a dependency in the package.json.

    - Run this command from the command-line in the same folder as your package.json:
    ```console
        npm install --save panviva.sdk
    ```

1. Import the Panviva client and the ResourceApiKeys enum from panviva.sdk into the file you wish to use it in.
   - Example:
   ```js
    const { PanvivaClient, ResourceApiKeys } = require('testpanviva');
   ```

1. Instantiate new PanvivaClient

	- To create a new client:
    ```js
      var panvivaClient = new PanvivaClient("_Your instance name here_", "https://api.panviva.com");
    ```

    > Note : Base Url is optional by default it will be `https://api.panviva.com`. You can provide a value to override the default.

1. Set the subscription key

    - panvivaClient.setApiKey(ResourceApiKeys.apiKeyHeader, "__replace with subscription key__");

1. Now you can make a request to the PanvivaApis if you have entered everything above correctly
    - An example of searching artefacts is:
        ```js
        panvivaClient.searchArtefacts("_your instance name here_", "_your query_").then((response) => {
            console.log(response.body); 
        })
        .error((error) => console.log(error)).catch((ex) => console.log(ex));
        ```

## __Available PanvivaClient methods__
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Optional parameter to Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
         <tr>
            <td rowspan="2" valign="top">getFolderByIdTranslations</td>
            <td>id</td>
            <td>string</td>
            <td>The internal id (IID) of a Panviva folder</td>
        </tr>
        <tr>
            <td>options (optional)</td>
            <td>any</td>
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
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
            <td>Override http request options.</td>
        </tr>
    </tbody>
</table>
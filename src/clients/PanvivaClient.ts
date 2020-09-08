import Authentication from '../interfaces/Authentication';
import { ResourceApiKeys } from '../enums/ResourceApiKeys';
import localVarRequest from 'request';
import GetDocumentContainersResponse from '../models/GetDocumentContainersResponse';
import GetDocumentContainerRelationshipsResponse from '../models/GetDocumentContainerRelationshipsResponse';
import GetContainerResponse from '../models/GetContainerResponse';
import GetArtefactCategoriesResponse from '../models/GetArtefactCategoriesResponse';
import GetDocumentResponse from '../models/GetDocumentResponse';
import GetFolderRootResponse from '../models/GetFolderRootResponse';
import GetFolderResponse from '../models/GetFolderResponse';
import GetFolderChildrenResponse from '../models/GetFolderChildrenResponse';
import GetFileResponse from '../models/GetFileResponse';
import PostArtefactCategoryRequest from '../models/PostArtefactCategoryRequest';
import PostArtefactCategoryResponse from '../models/PostArtefactCategoryResponse';
import GetDocumentTranslationsResponse from '../models/GetDocumentTranslationsResponse';
import GetFolderTranslationsResponse from '../models/GetFolderTranslationsResponse';
import GetImageResponse from '../models/GetImageResponse';
import GetResponseResponse from '../models/GetResponseResponse';
import VoidAuth from '../models/VoidAuth';
import ApiKeyAuth from '../models/ApiKeyAuth';
import PanvivaConstants from '../constants/PanvivaConstants';
import GetSearchArtefactResponse from '../models/GetSearchArtefactResponse';
import PostLiveCshRequest from '../models/PostLiveCshRequest';
import PostLiveDocumentRequest from '../models/PostLiveDocumentRequest';
import PostLiveDocumentResponse from '../models/PostLiveDocumentResponse';
import PostLiveSearchRequest from '../models/PostLiveSearchRequest';
import PostLiveSearchResponse from '../models/PostLiveSearchResponse';
import GetSearchResponse from '../models/GetSearchResponse';
import PostLiveCshResponse from '../models/PostLiveCshResponse';

export default class PanvivaClient {
  protected _basePath = PanvivaConstants.defaultBasePath;
  protected defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;
  protected _instance: string = '';

  protected authentications = {
    default: new VoidAuth() as Authentication,
    apiKeyHeader: new ApiKeyAuth('header', 'Ocp-Apim-Subscription-Key'),
  };

  constructor(instance: string, basePath?: string) {
    if (basePath) {
      // Remove training slash if any to avoid issues
      this.basePath = basePath.replace(/\/$/, '') + '/v3';
    }

    this._instance = instance;
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: ResourceApiKeys, value: string) {
    (this.authentications as any)[ResourceApiKeys[key]].apiKey = value;
  }
  /**
   * Return an artefact using the ID provided
   * @summary Artefact
   * @param id Format - uuid. The id (ID) of an artefact
   * @param {*} [options] Override http request options.
   */
  public getArtefactById(id: string, options: any = {}): Promise<{ body: GetResponseResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/artefact/${encodeURIComponent(id)}`
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getArtefactById.');
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getArtefactById.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetResponseResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Gets a list of all available artefact categories
   * @summary Get Artefact Categories
   * @param {*} [options] Override http request options.
   */
  public getArtefactCategories(options: any = {}): Promise<{ body: GetArtefactCategoriesResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/artefactcategory`
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getArtefactCategoriesGet.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetArtefactCategoriesResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Creates a category for classifying artefacts
   * @summary Create Artefact Category
   * @param postArtefactCategoryRequest JSON object containing the category name
   * @param {*} [options] Override http request options.
   */
  public getArtefactCategoryPost(
    postArtefactCategoryRequest?: PostArtefactCategoryRequest,
    options: any = {},
  ): Promise<{ body: PostArtefactCategoryResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/artefactcategory`
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getArtefactCategoryPost.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: postArtefactCategoryRequest,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: PostArtefactCategoryResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Return a container using the container ID provided
   * @summary Container
   * @param id The id of a document container
   * @param {*} [options] Override http request options.
   */
  public getContainerById(id: string, options: any = {}): Promise<{ body: GetContainerResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/container/${encodeURIComponent(id)}`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getContainerById.');
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getContainerById.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetContainerResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Return a document using the document ID provided
   * @summary Document
   * @param id A document unique identifier, Document ID. If a document is a translated document, this value represents Internal ID or IID in Panviva API v1.
   * @param version Request the API to return a particular version of the specified document.
   * @param {*} [options] Override http request options.
   */
  public getDocumentById(id: string, version?: number, options: any = {}): Promise<{ body: GetDocumentResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/document/${encodeURIComponent(id)}`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getDocumentById.');
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getDocumentById.');
    }

    if (version !== undefined) {
      localVarQueryParameters['version'] = version;
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetDocumentResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Return a list of containers using the document ID provided
   * @summary Document Containers
   * @param id The internal id (IID) of a Panviva document
   * @param {*} [options] Override http request options.
   */
  public getDocumentByIdContainers(id: number, options: any = {}): Promise<{ body: GetDocumentContainersResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/document/${encodeURIComponent(id)}/containers`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error(
        'Required parameter this._instance was null or undefined when calling getDocumentByIdContainers.',
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getDocumentByIdContainers.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetDocumentContainersResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Return a list of the parent-child relationship between each container for the document ID provided
   * @summary Document Container Relationships
   * @param id The internal id (IID) of a Panviva document
   * @param {*} [options] Override http request options.
   */
  public getDocumentByIdContainersRelationships(
    id: number,
    options: any = {},
  ): Promise<{ body: GetDocumentContainerRelationshipsResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/document/${encodeURIComponent(id)}/containers/relationships`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error(
        'Required parameter this._instance was null or undefined when calling getDocumentByIdContainersRelationships.',
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getDocumentByIdContainersRelationships.',
      );
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetDocumentContainerRelationshipsResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Return a list of all translations (per language and locale) of a Panviva document
   * @summary Document Translations
   * @param id The internal id (IID) of a Panviva document.
   * @param {*} [options] Override http request options.
   */
  public getDocumentByIdTranslations(
    id: number,
    options: any = {},
  ): Promise<{ body: GetDocumentTranslationsResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/document/${encodeURIComponent(id)}/translations`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error(
        'Required parameter this._instance was null or undefined when calling getDocumentByIdTranslations.',
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getDocumentByIdTranslations.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetDocumentTranslationsResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Returns a file (external document) from Panviva
   * @summary File
   * @param id The internal id (IID) of a Panviva file (external document)
   * @param {*} [options] Override http request options.
   */
  public getFileById(id: number, options: any = {}): Promise<{ body: GetFileResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/file/${encodeURIComponent(id)}`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getFileById.');
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getFileById.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetFileResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Return information about a Panviva folder and references to each of its direct children
   * @summary Folder
   * @param id The internal id (IID) of a Panviva folder
   * @param {*} [options] Override http request options.
   */
  public getFolderById(id: number, options: any = {}): Promise<{ body: GetFolderResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/folder/${encodeURIComponent(id)}`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getFolderById.');
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getFolderById.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetFolderResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Gets all the immediate children of a Panviva folder, not including grandchildren. Children can be folders, documents, or files (external documents)
   * @summary Folder Children
   * @param id The internal id (IID) of a Panviva folder
   * @param {*} [options] Override http request options.
   */
  public getFolderByIdChildren(id: number, options: any = {}): Promise<{ body: GetFolderChildrenResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/folder/${encodeURIComponent(id)}/children`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getFolderByIdChildren.');
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getFolderByIdChildren.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetFolderChildrenResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Gets all the translations of a Panviva folder, along with each translated folders respective children
   * @summary Folder Translations
   * @param id The internal id (IID) of a Panviva folder
   * @param {*} [options] Override http request options.
   */
  public getFolderByIdTranslations(id: number, options: any = {}): Promise<{ body: GetFolderTranslationsResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/folder/${encodeURIComponent(id)}/translations`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error(
        'Required parameter this._instance was null or undefined when calling getFolderByIdTranslations.',
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getFolderByIdTranslations.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetFolderTranslationsResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Gets the root/home folder in all of Panviva, which can be drilled into using the Get Folder Children endpoint. Note this endpoint was formerly referred to as the 'Folder Search' endpoint
   * @summary Folder Root
   * @param {*} [options] Override http request options.
   */
  public getFolderRoot(options: any = {}): Promise<{ body: GetFolderRootResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/folder/root`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getFolderRoot.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetFolderRootResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Returns an image from Panviva. Image data is represented as a base64 string
   * @summary Image
   * @param id The id of a Panviva image
   * @param {*} [options] Override http request options.
   */
  public getImageById(id: number, options: any = {}): Promise<{ body: GetImageResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/resources/image/${encodeURIComponent(id)}`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling getImageById.');
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getImageById.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetImageResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }

  /**
   * Return search results for a given query
   * @summary Search Artefacts
   * @param {string} params.simplequery Natural language query string. For example: Action Movies. (Note: Use simplequery OR advancedquery, not both.)
   * @param {string} params.advancedquery Query string written in Lucene query syntax. For example: films AND "a story". (Note: Use simplequery OR advancedquery, not both.)
   * @param {string} params.filter Accepts a Lucene-formatted filter string. Examples: category/name eq 'Mortgages', panvivaDocumentVersion gt '8'. (Filterable fields include dateCreated, dateModified, dateDeleted, category/name, category/dateCreated, category/dateModified, metaData/keyword/values, metaData/keyword/dataType, title, primaryQuery, isDeleted, timestamp, panvivaDocumentId, panvivaDocumentVersion, id)
   * @param {string} params.channel Return response for a specific channel, instead of the default
   * @param {number} params.pageOffset The pagination offset to denote the number of initial search results to skip. For example, pageOffset of 100 and pageLimit of 10 would return records 101-110.
   * @param {number} params.pageLimit The number of records to return. Must be an integer between 0 and 1000.
   * @param {string} params.facet Accepts a string denoting the field to facet by. Examples: facet=metaData/keyword/values. (Facetable fields include metaData/keyword/values)
   * @param {Object} [options] Override http request options.
   */
  public searchArtefacts({
    simplequery,
    advancedquery,
    filter,
    channel,
    pageOffset,
    pageLimit,
    facet,
    options = {},
  }: {
    simplequery?: string;
    advancedquery?: string;
    filter?: string;
    channel?: string;
    pageOffset?: number;
    pageLimit?: number;
    facet?: string;
    options: any;
  }): Promise<{ body: GetSearchArtefactResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/operations/artefact/nls`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling artefactNls.');
    }

    if (simplequery !== undefined) {
      localVarQueryParameters['simplequery'] = simplequery;
    }

    if (advancedquery !== undefined) {
      localVarQueryParameters['advancedquery'] = advancedquery;
    }

    if (filter !== undefined) {
      localVarQueryParameters['filter'] = filter;
    }

    if (channel !== undefined) {
      localVarQueryParameters['channel'] = channel;
    }

    if (pageOffset !== undefined) {
      localVarQueryParameters['pageOffset'] = pageOffset;
    }

    if (pageLimit !== undefined) {
      localVarQueryParameters['pageLimit'] = pageLimit;
    }

    if (facet !== undefined) {
      localVarQueryParameters['facet'] = facet;
    }

    (Object as any).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (localVarRequestOptions as any).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetSearchArtefactResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error: any, response: { statusCode: number }, body: any) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Present a CSH search result page of the passing query on Panviva client to specified user on Panviva client
   * @summary Live CSH
   * @param postLiveCshRequest JSON object containing information required to perform a live activity&lt;span&gt;:&lt;/span&gt;
   * @param {*} [options] Override http request options.
   */
  public postLiveCsh(
    postLiveCshRequest?: PostLiveCshRequest,
    options: any = {},
  ): Promise<{ body: PostLiveCshResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/operations/live/csh`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling liveCsh.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: postLiveCshRequest,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: PostLiveCshResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Present a document page to specified user on Panviva client
   * @summary Live Document
   * @param postLiveDocumentRequest JSON object containing information required to perform a live activity&lt;span&gt;:&lt;/span&gt;
   * @param {*} [options] Override http request options.
   */
  public postliveDocument(
    postLiveDocumentRequest?: PostLiveDocumentRequest,
    options: any = {},
  ): Promise<{ body: PostLiveDocumentResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/operations/live/document`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling liveDocument.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: postLiveDocumentRequest,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: PostLiveDocumentResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Present a search result page of the passing query on Panviva client to specified user on Panviva client
   * @summary Live Search
   * @param postLiveSearchRequest JSON object containing information required to perform a live activity&lt;span&gt;:&lt;/span&gt;
   * @param {*} [options] Override http request options.
   */
  public postLiveSearch(
    postLiveSearchRequest?: PostLiveSearchRequest,
    options: any = {},
  ): Promise<{ body: PostLiveSearchResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/operations/live/search`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling liveSearch.');
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: postLiveSearchRequest,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: PostLiveSearchResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
  /**
   * Searches documents, folders, and files (external documents) for a term and returns paginated results
   * @summary Search
   * @param term The word or phrase to be searched for
   * @param pageOffset The pagination offset to denote the number of initial search results to skip. For example, pageOffset of 100 and pageLimit of 10 would return records 101-110.
   * @param pageLimit The number of records to return. Must be an integer between 0 and 1000.
   * @param {*} [options] Override http request options.
   */
  public search(
    term: string,
    pageOffset?: number,
    pageLimit?: number,
    options: any = {},
  ): Promise<{ body: GetSearchResponse }> {
    const localVarPath = `${encodeURI(this.basePath)}/${encodeURIComponent(this._instance)}/operations/search`;
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter this._instance is not null or undefined
    if (this._instance === null || this._instance === undefined) {
      throw new Error('Required parameter this._instance was null or undefined when calling search.');
    }

    // verify required parameter 'term' is not null or undefined
    if (term === null || term === undefined) {
      throw new Error('Required parameter term was null or undefined when calling search.');
    }

    if (term !== undefined) {
      localVarQueryParameters['term'] = term;
    }

    if (pageOffset !== undefined) {
      localVarQueryParameters['pageOffset'] = pageOffset;
    }

    if (pageLimit !== undefined) {
      localVarQueryParameters['pageLimit'] = pageLimit;
    }

    Object.assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        localVarRequestOptions.formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ body: GetSearchResponse }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({ body });
          } else {
            reject({ body });
          }
        }
      });
    });
  }
}

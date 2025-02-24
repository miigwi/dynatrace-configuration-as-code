---
sidebar_position: 1
title: Add a new API
---

This guide shows you how to add a new API to Monaco that is not included in the [table of supported APIs](/configuration/configTypes_tokenPermissions.md) and how to determine whether an API is easy to add.

> :warning: Adding APIs to Monaco is straightforward in most cases. However, some APIs require more coding.


## Determine if an API is easy to add

Easy-to-add APIs fulfill the following criteria: 

* Configuration APIs that implement the following HTTP methods: 
  * `GET <my-environment>/api/config/v1/<my-config>` (get all configs)
  * `GET <my-environment>/api/config/v1/<my-config>/<id>` (get a single config)
  * `POST <my-environment>/api/config/v1/<my-config>` (create a new config)
  * `PUT <my-environment>/api/config/v1/<my-config>/<id>` (change an existing config)
  * `DELETE <my-environment>/api/config/v1/<my-config>/<id>` (delete a config)


* The model of the configuration has a `name` property: 
 
```json
{
      "id": "acbed0c4-4ef1-4303-991f-102510a69322",
      "name: "my-name"
      ...
}
```


* The `GET (all)` REST call return `id` and `name`:


```json
{
    "values": [
      {
        "id": "string",
        "name": "string"
      }
    ]
}
```


If your API fulfills these 3 criteria, perform the steps in the following section to add it to Monaco.


## Recognize if an API is of single configuration format

In addition to *easy-to-add* APIs, there are such APIs that comply to a *single configuration* format:

* They implement the following HTTP methods. E.g. for configuration APIs that is: 
  * `GET <my-environment>/api/config/v1/<my-config>` (get the config)
  * `PUT <my-environment>/api/config/v1/<my-config>` (change the config)

Opposed to standard APIs that allow configuring multiple entities, these APIs manage a single, global configuration (within one environment). Therefore, only a single GET and PUT endpoint exists but no endpoints that would allow managing sub-resources (e.g. `../<my-config>/<id>`).

> :warning: If your API does not fulfil any of the *easy-to-add* or *single configuration* requirements, please open a ticket in Monaco's backlog
to get implementation feedback from the maintainers.


## Add a new API to Monaco

Take the following steps to add a new API to Monaco.

1. Open your preferred CLI and enter the following code to add your API to [the map in api.go](https://github.com/dynatrace/dynatrace-configuration-as-code/blob/main/pkg/api/api.go#L25) and replace the placeholder values as described below. 


```json
  "<my-api-folder-name>": {
      apiPath: "<path-to-my-api>",                             // mandatory
      isSingleConfigurationApi: <is-single-configuration-api>, // only necessary if API is of single configuration format
      isNonUniqueNameApi: <is-non-unique-name-api>,            // only necessary if API doesn't have unique name attribute
      propertyNameOfGetAllResponse: "<property-name>",         // only necessary if API returns no "values" envelope (see below)
  },
```


| Placeholder                                  | Description                                                                                                                                                                                               |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <nobr>`<is-non-unique-name-api>`</nobr>      | Boolean value specifying if an API doesn't have a unique name attribute (optional, default: _false_).                                                                                                     |
| <nobr>`<is-single-configuration-api>`</nobr> | Boolean value specifying if an API is of single configuration format (optional, default: _false_).                                                                                                        |
| <nobr>`<my-api-folder-name>`</nobr>          | The name of the API, also used for the folder name for the configurations. Please take a look at the existing API names to get a feeling for the naming conventions and choose one accordingly.           |
| <nobr>`<path-to-my-api>`</nobr>              | This path points to your API. Monaco prefixes it with the environment URL to access the configs of your API.                                                                                              |
| <nobr>`<property-name>`</nobr>               | This names the json property used in the `GET ALL` REST call to return the list of configs. E.g. it would be `extensions`, if the response of your API's `GET ALL` REST call looks like the snippet below |

  
```json
    {
      "extensions": [
        {
          "id": "custom.python.connectionpool",
          "name": "Connection Pool",
          "type": "ONEAGENT"
        }
      ],
        "totalResults": 9,
        "nextPageToken": "LlUdYmu5S2MfX/ppfCInR9M="
      }
```


2. Add a sample config for the integration tests in [cmd/monaco/test-resources/integration-all-configs](https://github.com/dynatrace/dynatrace-configuration-as-code/tree/main/cmd/monaco/test-resources/integration-all-configs)


3. Add your API to the [table of supported APIs](/configuration/configTypes_tokenPermissions.md).

> :rocket: After performing these steps, please create the pull request in the upstream repository to share it with the community!

## Deprecating configuration types

Sometimes it's necessary to deprecate certain configuration types. This could have several reasons such as the DT API being deprecated or breaking functional changes (e.g. *dashboard-v2* resolves name uniqueness challenges of the *dashboard* configuration type).

As a best practise, such configurations are kept in the format: `<deprecated-configuration>-v<version increment>` (e.g. *dashboard-v2*).

In addition, deprecated configs can be flagged as such by specifying *isDeprecatedBy*, e.g.:

```
"<my-deprecated-api-folder-name>": {
    apiPath: "<path-to-my-api>",               // mandatory
    isDeprecatedBy: "<my-new-api-folder-name>" // only necessary if API is deprecated
},
```

Deprecated APIs are handled differently. For example, they are not downloaded anymore (unless explicitly specified by providing the *--downloadSpecificAPI* flag). During deployment a warning message is shown, however resources are still deployed.

### When and when not to deprecate?

As a rule of thumb, the same configuration types shall be re-used when e.g. new features are added. However, if a feature breaks functionality of an existing configuration type it is usually better to create a new vesion increment and deprecate the previously existing one.

For example, more info about the *dashboard*, *request-naming-service*, *app-detection-rule* deprecation can be found [here](deprecated_migration.md).

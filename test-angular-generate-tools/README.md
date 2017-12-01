###create new project
```bash
$ ng new test-angular-generate-tools
```
###add bootstrap
```bash
$ npm install bootstrap@4.0.0-alpha.6 --save
```
`add "../node_modules/bootstrap/dist/css/bootstrap.css", into "styles" of .angular-cli.json`
###run project
```bash
$ ng serve
```

###create custom pipes
1. create Pipes component
    ```bash
    $ ng g module pipes
    ```
2. create custom pipe
    ```bash
    $ ng g pipe pipes/slice-string
    ```
<b><i>don't forgot export custom pipe</i></b>

###create custom components
1. create share-modules module
    ```bash
    $ ng g module share-modules
    ```
2. create custom component
    ```bash
    $ ng g component share-modules/common-title
    ```

###create custom directives
1. create share-directives module
    ```bash
    $ ng g module share-directives
    ```
2. create custom directive
    ```bash
    $ ng g directive share-directives/add-active-class
    ```

###create custom services
1. create services module
    ```bash
    $ ng g module services
    ```
2. create custom service
    ```bash
    $ ng g service services/api-service
    ```
    
###create classes
1. create classes module
    ```bash
    $ ng g module common-classes
    ```
2. create custom class
    ```bash
    $ ng g class common-classes/people
    ```
3. create custom interface
    ```bash
    $ ng g interface common-classes/people-interface
    ```
4. create custom enum
    ```bash
    $ ng g enum common-classes/enum
    ```
    


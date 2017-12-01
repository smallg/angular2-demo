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

###create custom component
1. create share-modules module
```bash
$ ng g module share-modules
```
2. create custom component
```bash
$ ng g component share-modules/common-title
```


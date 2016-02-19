# cards

This project implements a simple web page with credit card selection panels.

## Notes about the solution

1. The solution is built using Bootstrap and Angular for scaffolding of the page.
2. Uses Angular for implementing the interactive functionality. Currently it uses a single controller in the router to load page templates. Navigation code (incomplete) is tucked in a template file that is included in using ng-include. The main view is loaded by the router. The constructor of the controller also loads in the data json file from the model folder.
3. The styling is organised to be scalable using smacss guideline. A simple BEM based naming convention is used for style classes. This runs somewhat against the Bootstrap naming convention. However using flat classes has more benefit in scalability and modularity and avoids the problems associated with specificity. 
4. The svg icon files provided in the asset folder could not be utilised directly as all the icons were exported in a single file without ids or names. As a workaround I have used the symbol font file from the main CTM website to link the icons to menu items.

### Issues encountered

Minor build issues were encountered in grunt plugin `usemin` as it renames image files during minification process. The controller generates the image name for the card from the json property: `code` but such dynamic name cannot be processed by usemin. The controller implements a workaround to specifically name the known image files in simple hashmap. 

## Build & development
### Preperation
1. After cloning the repostory first step is to install npm packages: `npm install`
2. This package uses bower to get Bootstrap and Angular libs locally for development. Install using `bower install`
3. If you do not have compass installed locally install it e.g. as a gem: `gem install compass`.

### Building the project
1. Run `grunt` for building and `grunt serve` for preview.
1. Run `grunt build:dist` to build the optimized dist folder with minified code and images for uploading to a server manually.

## Testing
Running `grunt test` will run the unit tests with karma. Only two test at the moment.



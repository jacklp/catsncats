## Angular 1.5 Tech Demo


## Modular Design

Application makes use of Angular shared component modules to create re-usable views (e.g /shared/menu)


## Angular HTML list filtering

see /shared/products.html
<input type="search" ng-model="q" placeholder="filter products..." aria-label="filter products" />
<li class="col-xs-6 col-md-4 animate-repeat product-container list-group-item" ng-repeat="product in products | filter:q as results">


## Responsive layout implemented with the bootstrap css framework.

container-fluid and 2-col/3-col layout depending on browser size.


## Visualisations Section Coming Soon!


## Run App

Then to serve it `npm start` and navigate to [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html)

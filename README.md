# EasyInventory
## A website to manage your warehouse, letting you to ship/add stock and new items.

Live site [Link](https://crick-freak-assignment.web.app/)

This is a full stack web app to manage your warehouse. In this example I am using this to manage a stores inventory that sells cricket equipment.

## Here are the key features
* The home page has a navbar, banner, an inventory section showing the first 6 items and a footer.
* As extra sections in the home page, I added a chart to visualize the stock of different items and a form to report a bugor issue. The bug reports are stored in the database and can be viewed in the `bugs` route.
* The navbar has a link that will take you to the login page. If You want, you can create a new account by clicking the `register` link in that page.
* Once you login, the navbar will show `manage inventory`, `my items` and `add items` links.
* The navbar also has two more public routes `Blogs` and `All items` that can be accessed without logging in.
* Each item shown in the homepage and the `all items` route has a button called `update stock`. Clicking this will take you to a page where you can see all the details of the product and delever the product to decrease the quantity or use the restock form to restock the product.
* The manage inventory route allowes you to view all products in a table. You can also delete a product from here.
* My items route will show all items added by that specific user in a table. The user can delete the items form here as well. Here I used a simple JWT auth system to make the api secure.
* In the add item route, you can fill a form with necessery data to add a new item in the inventory.

## Technology used
* ReactJS
* NodeJS
* Express
* MongoDB
* TailwindCSS
* Tailwind Starter Kit
* React Hot Toast
* Firebase
* React Firebase Hooks
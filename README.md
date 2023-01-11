# Test-node-api  
A sample node js api for Product with their related category.     

## Steps

`   
This sample express app, has https enabled already.    


## Clone the repository, install node packages  and verify routes locally

//on local
git clone https://github.com/amitsingh17051/testrestapi.git
cd testrestapi
npm install
npm start
```

Open your local browser and verify the testrestapi is working by accessing:   

### Products API Routes 
  
All Products => `http://localhost:8000/products/` [ Get Request ]
Single Product =>  `http://localhost:8000/products/{product_id}`   [ Get Request ]
Delete Product =>  `http://localhost:8000/products/{product_id}`   [ Delete Request ]
Create Product => `http://localhost:8000/products/` [ Post Request ]
  - Json body for creating product

  {
    "name": "product name",
    "description": "Product One Description",
    "price": "42",
    "categories": ["{category_id}"]
  }
  ```
Update Product =>  `http://localhost:8000/products/{product_id}`   [ PUT Request ]
  - Json body for Update product
  

  {
    "name": "product name",
    "description": "Product One Description",
    "price": "42",
    "categories": ["{category_id}"]
  }
  ```

### Category API Routes 
  
All Categories => `http://localhost:8000/categories/` [ Get Request ]
Single Category =>  `http://localhost:8000/categories/{category_id}`   [ Get Request ]
Delete Category =>  `http://localhost:8000/categories/{category_id}`   [ Delete Request ]
Create Category => `http://localhost:8000/categories/` [ Post Request ]
  - Json body for creating Category
  

  {
    "name": "product name",
  }
  ```
  
Update Product =>  `http://localhost:8000/products/{category_id}`   [ PUT Request ]
  - Json body for Update Category
  

  {
    "name": "product name",
  }
  ```
  



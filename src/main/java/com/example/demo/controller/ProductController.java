package com.example.demo.controller;

import com.example.demo.domain.Product;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductController {
    Product[] products = new Product[3];

    ProductController(){
        products[0] = new Product(1,"first",12.12);
        products[1] = new Product(2,"second",12.13);
        products[2] = new Product(3,"third",12.14);
    }

    @GetMapping(value = "/products",produces = MediaType.APPLICATION_JSON_VALUE)
    public Product[] getProducts(){
        return products;
    }


}

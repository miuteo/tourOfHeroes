package com.example.demo.domain;

public class Product {
    public final int id;
    public final String title;
    public final double price;

    public Product(int id, String title, double price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

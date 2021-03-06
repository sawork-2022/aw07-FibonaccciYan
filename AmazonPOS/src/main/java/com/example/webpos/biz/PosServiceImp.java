package com.example.webpos.biz;

import com.example.webpos.model.Cart;
import com.example.model.Item;
import com.example.model.Order;
import com.example.model.Product;
import com.example.webpos.db.PosDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.function.StreamBridge;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

@Component
public class PosServiceImp implements PosService, Serializable {

    private PosDB posDB;

    @Autowired
    private StreamBridge streamBridge;

    @Autowired
    public void setPosDB(PosDB posDB) {
        this.posDB = posDB;
    }

    @Override
    public Cart getCart() {

        Cart cart = posDB.getCart();
        if (cart == null) {
            cart = this.newCart();
        }
        return cart;
    }

    @Override
    public Cart newCart() {
        return posDB.saveCart(new Cart());
    }

    @Override
    public Product randomProduct() {
        return products().get(ThreadLocalRandom.current().nextInt(0, products().size()));
    }

    @Override
    public void checkout(Cart cart) {
        System.out.println(cart.toString());

        Order order = new Order(UUID.randomUUID().toString(), cart.getItems());
        System.out.println(order.getStatus() + " " + order.getUuid());

        streamBridge.send("OrderDeliverer", order);
    }

    @Override
    public double total(Cart cart) {
        double sum = 0;
        for (Item item : cart.getItems()) {
            sum += item.getQuantity() * item.getProduct().getPrice();
        }

        return sum;
    }

    @Override
    public boolean add(Product product, int amount) {
        return add(product.getId(), amount);
    }

    @Override
    public boolean add(String productId, int amount) {

        Product product = posDB.getProduct(productId);
        if (product == null) return false;

        if (this.getCart().containItem(new Item(product, amount))) {
            this.getCart().getItem(new Item(product, amount)).addQuantity(amount);
        } else {
            this.getCart().addItem(new Item(product, amount));
        }
        return true;
    }

    @Override
    public boolean sub(String productId, int amount) {
        Product product = posDB.getProduct(productId);
        if (product == null) return false;

        if (this.getCart().removeItem(new Item(product, amount)) == false) {
            this.delete(productId);
        }
        return true;
    }

    @Override
    public boolean delete(String productId) {
        Product product = posDB.getProduct(productId);
        if (product == null) return false;

        this.getCart().deleteItem(new Item(product, -1));
        return true;
    }

    @Override
    public List<Product> products() {
        return posDB.getProducts();
    }
}

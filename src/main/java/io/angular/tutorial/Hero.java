package io.angular.tutorial;

import java.util.Objects;

public class Hero {

    private Long id;
    private String name;
    public Hero(){}
    public Hero(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Hero hero = (Hero) o;
        return id == hero.id &&
                Objects.equals(name, hero.name);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name);
    }
}

package io.angular.tutorial;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/heroes")
public class HeroController {
    List<Hero> heroes = new ArrayList<>();

    @GetMapping
    public List<Hero> getAll(){
        return heroes;
    }

    @GetMapping("/{id}")
    public Hero getById(@PathVariable long id){
        return heroes.stream()
                .filter(hero -> id == hero.getId())
                .findFirst().orElse(null);
    }

    @PutMapping()
    public Hero updateHero(@RequestBody Hero hero){
        if(hero.getId() == null)
            return createHero(hero);
        heroes.stream()
                .filter(cHero -> cHero.getId() == hero.getId())
                .findFirst()
                .ifPresent(hero1 -> hero1.setName(hero.getName()));
        return hero;
    }

    @PostMapping
    public Hero createHero(@RequestBody Hero hero){
        long id = heroes.stream().mapToLong(Hero::getId).max().orElse(0)+1;
        Hero createdHero = new Hero(id,hero.getName());
        heroes.add(createdHero);
        return createdHero;
    }

    @DeleteMapping("/{id}")
    public void deleteHero(@PathVariable long id){
        heroes = heroes.stream().filter(hero -> id!=hero.getId()).collect(Collectors.toList());
    }



    HeroController(){
        heroes.addAll(Arrays.asList(
                new Hero(11, "Mr. Teo" ),
                new Hero(12, "Narco"),
                new Hero(13, "Bombasto"),
                new Hero(14,  "Celeritas"),
                new Hero(15,  "Magneta"),
                new Hero(16,  "RubberMan"),
                new Hero(17,  "Dynama"),
                new Hero(18,  "Dr IQ"),
                new Hero(19,  "Magma" ),
                new Hero(20,  "Tornado")));
    }
}

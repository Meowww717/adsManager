package com.example.ads_manager;

import com.example.ads_manager.model.Ads;
import com.example.ads_manager.repository.AdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SecuringWebApplication implements CommandLineRunner {

    public static void main(String[] args) throws Throwable {
        SpringApplication.run(SecuringWebApplication.class, args);
    }

    @Autowired
    private AdsRepository adsRepository;


    @Override
    public void run(String... args) throws Exception {
        this.adsRepository.save(new Ads(1, "Ad 1", "13-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(2, "Ad 2", "14-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(3, "Ad 3", "15-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(4, "Ad 4", "16-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(5, "Ad 5", "17-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(6, "Ad 6", "18-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(7, "Ad 7", "19-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(8, "Ad 8", "20-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(9, "Ad 9", "21-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
        this.adsRepository.save(new Ads(10, "Ad 10", "22-01-2021", "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif", "pending"));
    }
}

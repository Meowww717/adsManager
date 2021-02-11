package com.example.ads_manager.controller;

import com.example.ads_manager.model.Ads;
import com.example.ads_manager.repository.AdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping({"api/"})
public class AdsController {

    @Autowired
    private AdsRepository adsRepository;

    @GetMapping("ads")
    public List<Ads> getAds() {
        return this.adsRepository.findAll();
    }

    @GetMapping("ads/{id}")
    public Object getAdsById(@PathVariable long id) {
        return this.adsRepository.findById(id);
    }

    @PutMapping("ads/{id}")
    Ads put(@RequestBody Ads newAds, @PathVariable Long id) {

        return adsRepository.findById(id)
                .map(ads -> {
                    ads.setName(newAds.getName());
                    ads.setDate(newAds.getDate());
                    ads.setImage(newAds.getImage());
                    ads.setStatus(newAds.getStatus());
                    return adsRepository.save(ads);
                })
                .orElseGet(() -> {
                    newAds.setId(id);
                    return adsRepository.save(newAds);
                });
    }
}

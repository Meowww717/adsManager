package com.example.ads_manager.repository;

import com.example.ads_manager.model.Ads;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdsRepository extends JpaRepository<Ads, Long> {
}

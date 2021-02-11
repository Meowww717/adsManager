package com.example.ads_manager;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String ENCODED_PASSWORD = "$2a$10$m2DEp/A.xd8jWB3XqlMWeesgYEL78KqRYdFSfmWW3dgVHo/QmZY76";

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.inMemoryAuthentication()
                .passwordEncoder(passwordEncoder())
                .withUser("user_a").password(ENCODED_PASSWORD).roles("USER");

        auth.inMemoryAuthentication()
                .passwordEncoder(passwordEncoder())
                .withUser("user_b").password(ENCODED_PASSWORD).roles("USER");
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

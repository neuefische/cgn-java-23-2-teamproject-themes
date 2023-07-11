package de.neuefische.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception {
        return http
            .csrf().disable()
            .httpBasic(Customizer.withDefaults())
            .authorizeHttpRequests(httpRequests ->
                httpRequests
                    .requestMatchers(HttpMethod.GET,"/api/theme").permitAll()
                    .requestMatchers("/api/theme").authenticated()
                    .requestMatchers(HttpMethod.GET,"/api/theme/**").permitAll()
                    .requestMatchers("/api/theme/**").authenticated()
                    .requestMatchers("/api/user/me").authenticated()
                    .anyRequest().authenticated()
            )
            .formLogin(Customizer.withDefaults())
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();
    }
}
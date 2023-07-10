package de.neuefische.backend.security;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MongoUserRepository extends MongoRepository<MongoUser, String> {

    Optional<MongoUser> findByUsername(String username);




}

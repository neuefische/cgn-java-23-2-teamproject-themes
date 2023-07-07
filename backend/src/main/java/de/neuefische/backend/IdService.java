package de.neuefische.backend;

import org.springframework.stereotype.Component;

import java.util.UUID;
@Component
class IdService {

    public String createId(){
        return UUID.randomUUID().toString();
    }
}

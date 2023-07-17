package de.neuefische.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Theme not found!")
public class NoSuchThemeException extends RuntimeException {

    public NoSuchThemeException() {
    }

    public NoSuchThemeException(String message) {
        super(message);
    }

    public NoSuchThemeException(String message, Throwable cause) {
        super(message, cause);
    }

    public NoSuchThemeException(Throwable cause) {
        super(cause);
    }
}
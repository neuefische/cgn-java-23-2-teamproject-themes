package de.neuefische.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({MethodArgumentNotValidException.class })
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorMessage handleBindExceptionExceptions(MethodArgumentNotValidException exception) {
        return new ErrorMessage(exception.getAllErrors().get(0).getDefaultMessage());
    }

    @ExceptionHandler({NoSuchThemeException.class, })
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorMessage handleNoSuchElementExceptions(NoSuchThemeException exception) {
        return new ErrorMessage(exception.getMessage());
    }
}

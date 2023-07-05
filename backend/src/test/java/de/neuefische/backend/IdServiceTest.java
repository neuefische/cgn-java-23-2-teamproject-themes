package de.neuefische.backend;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.data.annotation.Id;

import static org.mockito.Mockito.when;

public class IdServiceTest {

    private IdService idService = Mockito.mock(IdService.class) ;

    @Test
    void test_getUUID(){
        //GIVEN

        String expected = "aBcDeF69";

        //WHEN
        //when(IdService.createId()).thenReturn(expected);
        when(idService.createId()).thenReturn(expected);
        String actual = idService.createId();

        //THEN
        Assertions.assertThat(actual).isEqualTo(expected);
    }
}

package utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.Serializable;
import java.lang.runtime.ObjectMethods;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;


@lombok.Data
public class Data implements Serializable {

    private double x, y, r;
    private boolean result;
    private String currentTime, executeTime, session;

    private Map<String, String> getBean() {
        Map<String, String> bean = new LinkedHashMap<>();
        bean.put("x", String.valueOf(x));
        bean.put("y", String.valueOf(y));
        bean.put("r", String.valueOf(r));
        bean.put("currentTime", String.valueOf(currentTime));
        bean.put("executionTime", String.valueOf(executeTime));
        bean.put("result", String.valueOf(result));
        return bean;
    }

    public Data() {
    }

    public String jsonBean() throws JsonProcessingException {

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(this.getBean());

    }
}
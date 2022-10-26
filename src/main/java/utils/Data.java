package utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.io.Serializable;
import java.lang.runtime.ObjectMethods;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;


@lombok.Data
public class Data implements Serializable {

    private double x, y, r;
    private String result, currentTime, executeTime, session;

    private Map<String, String> getBean() {
        Map<String, String> bean = new LinkedHashMap<>();
        bean.put("x", String.valueOf(x));
        bean.put("y", String.valueOf(y));
        bean.put("r", String.valueOf(r));
        bean.put("currentTime", String.valueOf(currentTime));
        bean.put("executionTime", String.valueOf(executeTime));
        if(result.equals("true")) {
            bean.put("color", "green");
        }else if(result.equals("change")){
            bean.put("color", "black");
        }else{
            bean.put("color", "red");
        }
        return bean;
    }

    private Map<String, String> getBean(HttpServletRequest request) {
        Map<String, String> bean = new LinkedHashMap<>();
        bean.put("x", String.valueOf(x));
        bean.put("y", String.valueOf(y));
        bean.put("r", String.valueOf(r));
        bean.put("currentTime", String.valueOf(currentTime));
        bean.put("executionTime", String.valueOf(executeTime));
        if(String.valueOf(request.getSession().getId()).equals(session)) {
            if(String.valueOf(result).equals("true")) {
                bean.put("color", "green");
            }else{
                bean.put("color", "red");
            }
        }else{
            bean.put("color", "black");
        }
        return bean;
    }

    public Data() {
    }

    public String jsonBean() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(this.getBean());
    }

    public String jsonBean(HttpServletRequest request) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(this.getBean(request));
    }
}
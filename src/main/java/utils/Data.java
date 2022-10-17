package utils;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import org.kopitubruk.util.json.JSONUtil;

@lombok.Data
public class Data implements Serializable {

    private int x, y, r;
    private boolean result;
    private String currentTime, executeTime, session, color;

    private Map<String, String> getBean() {
        Map<String, String> bean = new HashMap<>();
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

    public String jsonBean() {
        return JSONUtil.toJSON(this.getBean());
    }
}
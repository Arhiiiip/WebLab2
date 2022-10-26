package utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
//import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import org.kopitubruk.util.json.JSONUtil;
import javax.servlet.*;
import javax.servlet.http.*;

import java.io.Serializable;
import java.util.*;

public class DataCol implements Serializable {

    @Getter
    private static final List<Data> beanList = Collections.synchronizedList(new LinkedList<>());

    public static synchronized void addBean(Data bean) {
        beanList.add(bean);
    }

    public static synchronized void clear(String session) {
        beanList.removeIf(arg -> arg.getSession().equals(session));
    }

    public static String jsonDataCol() throws JsonProcessingException {
        int count = DataCol.getBeanList().size();
        HashSet<String> beanJsonCol = new LinkedHashSet<>();
        for (Data bean : DataCol.getBeanList()) {
            try {
                beanJsonCol.add(bean.jsonBean());
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
            count = count - 1;
        }

        return String.valueOf(beanJsonCol);
    }
    public static String jsonDataCol(HttpServletRequest request) throws JsonProcessingException {
        int count = DataCol.getBeanList().size();
        HashSet<String> beanJsonCol = new LinkedHashSet<>();
        for (Data bean : DataCol.getBeanList()) {
            try {
                beanJsonCol.add(bean.jsonBean(request));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
            count = count - 1;
        }
        return String.valueOf(beanJsonCol);
    }
}

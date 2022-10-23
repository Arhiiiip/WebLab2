package utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import org.kopitubruk.util.json.JSONUtil;

import java.io.Serializable;
import java.util.*;

public class DataCol implements Serializable {

    @Getter
    private static final List<Data> beanList = Collections.synchronizedList(new LinkedList<>());

    private static synchronized List<Data> getDataCol() {
        return beanList;
    }

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
                System.out.println("FUCKING TROUBLE");
                e.printStackTrace();
            }
            count = count - 1;
        }
        return String.valueOf(beanJsonCol);
    }
}

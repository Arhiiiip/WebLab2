package utils;

import lombok.Getter;

import java.io.Serializable;
import java.util.*;

public class DataCol implements Serializable {

    @Getter
    private static final List<Data> beanList = Collections.synchronizedList(new LinkedList<>());

    private static synchronized List<Data> getDataCol(){
        return beanList;
    }

    public static synchronized void addBean(Data bean) {
        beanList.add(bean);
    }

    public static synchronized void clear(String session) {
        beanList.removeIf(arg -> arg.getSession().equals(session));
    }

    public static HashSet<String> jsonDataCol(){
        HashSet<String> beanJsonCol = new LinkedHashSet<>();
        for(Data bean: DataCol.getBeanList()){
            beanJsonCol.add(bean.jsonBean());
        }
    return beanJsonCol;
    }
}

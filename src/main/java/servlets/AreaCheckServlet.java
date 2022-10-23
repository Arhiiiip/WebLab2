package servlets;

import utils.Data;
import utils.DataCol;


import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        long start = System.nanoTime();
        Data bean = new Data();

        try {
            double x = Double.parseDouble(request.getParameter("x_value"));
            double y = Double.parseDouble(request.getParameter("y_value"));
            double r = Double.parseDouble(request.getParameter("r_value"));

            if (!validate(x, y, r)) {
                response.setStatus(422);
                return;
            }

            String currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
            boolean result = isHit(x, y, r);
            String session = request.getParameter("session");

            bean.setX(x);
            bean.setY(y);
            bean.setR(r);
            bean.setCurrentTime(currentTime);
            bean.setResult(result);
            bean.setSession(session);

            String executionTime = String.valueOf(((double) (System.nanoTime() - start) / 1000000));
            bean.setExecuteTime(executionTime);

            DataCol.addBean(bean);
        } catch (NumberFormatException exception) {
            response.setStatus(422);
        }

        response.setHeader("Cache-Control", "no-cache");
        response.setContentType("application/json; charset=UTF-8");
        response.getWriter().println(DataCol.jsonDataCol());
    }


    private boolean isHit(double x, double y, double r) {
        if (x > 0) {
            if (y >= 0) {
                return ((x * x + y * y) <= (r * r));
            } else {
                return false;
            }
        } else {
            if (y <= 0) {
                return y >= -2 * x - r * 2;
            } else
                return (-x <= r) && (y <= r / 2);
        }
    }

    private boolean validate(double x, double y, double r) {
        List<Double> rPossibleValues = Arrays.asList(1.0, 1.5, 2.0, 2.5, 3.0);

        return (rPossibleValues.contains(r) && y >= -3 && y <= 3);
    }

}

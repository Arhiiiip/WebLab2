package servlets;

import utils.Data;
import utils.DataCol;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Data bean = new Data();

        try {
            int x = Integer.parseInt(request.getParameter("x_value"));
            int y = Integer.parseInt(request.getParameter("y_value"));
            int r = Integer.parseInt(request.getParameter("r_value"));

            if (x < -3 || x > 5 || y <= -5 || y >= 3 || r <= 2 || r >= 5) {
                response.setStatus(422);
                return;
            }

            String currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
            long start = System.nanoTime();
            boolean result = isHit(x, y, r);
            String executionTime = String.valueOf((System.nanoTime() - start) / 1000);
            String session = request.getParameter("session");

            bean.setX(x);
            bean.setY(y);
            bean.setR(r);
            bean.setCurrentTime(currentTime);
            bean.setExecuteTime(executionTime);
            bean.setResult(result);
            bean.setSession(session);

            DataCol.addBean(bean);

        } catch (NumberFormatException exception) {
            response.setStatus(422);
        }

        response.setHeader("Cache-Control", "no-cache");
        response.setContentType("application/json; charset=UTF-8");
        response.getWriter().println(DataCol.jsonDataCol());
    }


    private boolean isHit(int x, int y, int r) {
        if (x > 0) {
            if (y >= 0) {
                return ((x * x + y * y) <= (r * r));
            } else {
                return false;
            }
        } else {
            if (y <= 0) {
                return y >= -2 * x - r / 2;
            } else
                return (-x <= r) && (y <= r / 2);
        }
    }

}

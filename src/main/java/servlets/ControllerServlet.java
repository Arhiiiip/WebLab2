package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.Objects;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String x = request.getParameter("x_value");
        String y = request.getParameter("y_value");
        String r = request.getParameter("r_value");
        String session = request.getParameter("session");

        if (Objects.equals(session, "clear")) {
            request.getRequestDispatcher("./clear").forward(request, response);
        } else if (Objects.equals(session, "refresh")) {
            request.getRequestDispatcher("./refresh").forward(request, response);
        } else if ((x != null && y != null && r != null && Objects.equals(session, "shoot")) && (!x.trim().equals("") && !y.trim().equals("") && !r.trim().equals("") && !session.trim().equals(""))) {
            request.getRequestDispatcher("./check").forward(request, response);
        } else {
            response.setStatus(422);
        }
    }
}

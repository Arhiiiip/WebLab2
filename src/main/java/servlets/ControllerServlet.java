package servlets;


//import jakarta.servlet.ServletException;
//import jakarta.servlet.annotation.WebServlet;
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;

import utils.Data;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String x = request.getParameter("x_value");
        String y = request.getParameter("y_value");
        String r = request.getParameter("r_value");
        String command = request.getParameter("command");

        if (command.equals("reset")) {
            request.getRequestDispatcher("./clear").forward(request, response);
        } else if (command.equals("refresh")) {
            request.getRequestDispatcher("./refresh").forward(request, response);
        } else if (command.equals("change")) {
            request.getRequestDispatcher("./change").forward(request, response);
        } else if ((x != null && y != null && r != null && command.equals("shoot")) && (!x.trim().equals("") && !y.trim().equals("") && !r.trim().equals(""))){
            request.getRequestDispatcher("./check").forward(request, response);
        } else {
            Data bean = new Data();
            response.setStatus(422);
            bean.setResult("The command you are trying to send is invalid.");
            response.setHeader("Cache-Control", "no-cache");
            response.setContentType("application/json; charset=UTF-8");
            response.getWriter().println(bean.jsonBean(422));
        }
    }
}

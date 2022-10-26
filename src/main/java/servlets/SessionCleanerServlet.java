package servlets;

import utils.Data;
import utils.DataCol;

//
//import jakarta.servlet.ServletException;
//import jakarta.servlet.annotation.WebServlet;
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;

import javax.servlet.*;
import javax.servlet.http.*;

//@WebServlet(name = "SessionCleanerServlet", value = "/clear")
public class SessionCleanerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        String sessionID = request.getSession().getId();
        DataCol.clear(sessionID);
    }


}

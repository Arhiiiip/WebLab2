<%@page contentType="text/html" pageEncoding="UTF-8" language="java" %>
<%@ page import="utils.DataCol" %>
<%@ page import="utils.Data" %>
<%@ page import="java.util.List" %>
<%@ page import="java.io.PrintWriter" %>


<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/checkBox.css">
    <link rel="icon" href="img/favicon.ico">
    <meta charset="UTF-8">
    <title>Lab 2 Riabokon</title>
    <script src="js/checkBox.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/main.js"></script>
    <script src="js/reset.js"></script>
    <script src="js/shoot.js"></script>
    <script src="js/refreshShoot.js"></script>
    <script src="js/submit.js"></script>
    <script src="js/table.js"></script>
    <script src="js/validator.js"></script>

</head>
<body class="base">
    <header>
        <a>Riabokon Arhip, P32302, Option 531613</a>
    </header>

<main>
    <div class="meaning">
        <svg id="graph" class="graph" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <!--Coordinates axes-->
            <line stroke="black" x1="0" x2="400" y1="200" y2="200"></line>
            <line stroke="black" x1="200" x2="200" y1="0" y2="400"></line>
            <!--Axis directions-->
            <polygon fill="black" stroke="black" points="400,200 385,205 385,195"></polygon>
            <polygon fill="black" stroke="black" points="200,0 195,10 205,10"></polygon>
            <!--Section-->
            <line stroke="black" x1="50" x2="50" y1="195" y2="205"></line>
            <line stroke="black" x1="125" x2="125" y1="195" y2="205"></line>
            <line stroke="black" x1="275" x2="275" y1="195" y2="205"></line>
            <line stroke="black" x1="350" x2="350" y1="195" y2="205"></line>
            <line stroke="black" x1="195" x2="205" y1="50" y2="50"></line>
            <line stroke="black" x1="195" x2="205" y1="125" y2="125"></line>
            <line stroke="black" x1="195" x2="205" y1="275" y2="275"></line>
            <line stroke="black" x1="195" x2="205" y1="350" y2="350"></line>
            <!--- Units --->
            <text fill="black" x="40" y="190">-R</text>
            <text fill="black" x="110" y="190">-R/2</text>
            <text fill="black" x="265" y="190">R/2</text>
            <text fill="black" x="345" y="190">R</text>
            <text fill="black" x="210" y="54">R</text>
            <text fill="black" x="210" y="128">R/2</text>
            <text fill="black" x="210" y="278">-R/2</text>
            <text fill="black" x="210" y="353">-R</text>
            <text fill="black" x="387" y="190">X</text>
            <text fill="black" x="210" y="10">Y</text>
            <!--Areas-->
            <polygon fill="#fd6d6d" fill-opacity="0.4" stroke="black"
                     points="125,200 200,350 200,200"></polygon>
            <polygon fill="#1d62e1" fill-opacity="0.4" stroke="black"
                     points="50,200 50,125 200,125 200,200"></polygon>
            <path fill="#1fce07" fill-opacity="0.4" stroke="black"
                  d="M 200,50 A 150,150  90 0,1 350,200 L 200,200 Z"></path>

<%--        <%--%>
<%--            List<Data> beanList = DataCol.getBeanList();--%>
<%--            for (Data nextBean : beanList) {--%>
<%--                int R = nextBean.getR();--%>
<%--                int coordinateX = (nextBean.getX() * 150 / R) + 200;--%>
<%--                int coordinateY = -(nextBean.getY() * 150 / R) + 200;--%>
<%--                String color = nextBean.getColor();--%>

<%--                out.println("<circle fill=\"" + color + "\" cx=\"" + coordinateX + "\" cy=\"" + coordinateY + "\"  r=\"4\"></circle>");--%>
<%--            }--%>
<%--        %>--%>
        </svg>
        <aside class="bord">
            <h2 style="">Input data:</h2>
            <form id="form" name="form" method="post">
                <div>
                    X:<br>
                    <table id="checkX">
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgumentm4" value="-4">
                            <label for="xArgumentm4">-4</label>
                        </td>
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgumentm3" value="-3">
                            <label for="xArgumentm3">-3</label>
                        </td>
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgumentm2" value="-2">
                            <label for="xArgumentm2">-2</label>
                        </td>
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgumentm1" value="-1">
                            <label for="xArgumentm1">-1</label>
                        </td>
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgument0" value="0">
                            <label for="xArgument0">0</label>
                        </td>
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgument1" value="1">
                            <label for="xArgument1">1</label>
                        </td>
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgument2" value="2">
                            <label for="xArgument2">2</label>
                        </td>
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgument3" value="3">
                            <label for="xArgument3">3</label>
                        </td>
                        <td>
                            <input class="checkInput" name="xArgument" type="checkbox" id="xArgument4" value="4">
                            <label for="xArgument4">4</label>
                        </td>
                    </table>
                </div>
                <div>
                    <label for="yArgument">Y:</label><input class="rangeInput" type="text" id="yArgument"
                                                            maxlength="4" required><br>
                </div>
                <div>
                    R:
                    <select class="rangeInput" id="rArgument" required>
                        <option value="1">1
                        <option value="1.5">1.5
                        <option value="2">2
                        <option value="2.5">2.5
                        <option value="3">3
                    </select>
                </div>
                <p>
                    Y in (-3 ... 3)<br>
                </p>
                <p class="error" id="error"></p>
                <button type="submit" class="buttonData" id="buttonShoot">Shoot</button>
                <button class="buttonData" id="buttonReset" type="button">Reset</button>

<%--                <div class="sessionid" id="sessionid">--%>
<%--                </div>--%>
            </form>
        </aside>
    </div>
    <table class="historyTable" id="historyTable">
        <tr class="startTable" id="startTable">
            <td>X</td>
            <td>Y</td>
            <td>R</td>
            <td>Current time</td>
            <td>Execution time</td>
            <td>Result</td>
        </tr>
    </table>
</main>
<footer>
    <p><a style="color:#ffffe5">Author: Riabokon Arhip Borisovich</a><br>
        <a href="mailto:rabokony@icloud.com" style="text-decoration: none;color:#ffffe5">rabokony@icloud.com</a><br>
    <a href="https://github.com/Arhiiiip" title="Go to the developer's github"
        style="text-decoration: none;color:#ffffe5">Go to the developer's github</a></p>
</footer>
</body>
</html>
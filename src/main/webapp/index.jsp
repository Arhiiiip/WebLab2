<%@page contentType="text/html" pageEncoding="UTF-8" %>

<%--<jsp:useBean id="s" scope="application" class="utils.data">--%>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="main.css">
    <link rel="icon" href="img/favicon.ico">
    <meta charset="UTF-8">
    <title>Lab 1 Riabokon</title>
    <script defer src="js/jquery.js"></script>
    <script defer src="js/main.js"></script>
    <script defer src="js/reset.js"></script>
</head>
<body class="base">
<header>
    <h1>Riabokon Arhip, P32302, Option 3113</h1>
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
        </svg>
        <aside class="bord">
            <h2 style="">Input data:</h2>
            <form id="form" name="form" method="post">
                <table class="tableData">
                    <tr style="background: #e88989">
                        <td>X</td>
                        <td>Y</td>
                        <td>R</td>
                    </tr>
                    <tr style="background: #ffb0b0">
                        <td><label for="xArgument"></label><input class="rangeInput" type="checkbox" id="xArgument"></td>
                        <td><label for="yArgument"></label><input class="rangeInput" type="text" id="yArgument"
                                                                  maxlength="4" required></td>
                        <td><label for="rArgument"></label><input class="rangeInput" type="text" id="rArgument"
                                                                  maxlength="3" required></td>
                    </tr>
                </table>

                <p>
                    X in (-3 ... 5)<br>
                    Y in (-3 ... 3)<br>
                    R in (2 ... 5)
                </p>
                <p class="error" id="error"></p>
                <button type="submit" class="buttonData" id="buttonShoot">Shoot</button>
                <button class="buttonData" id="buttonReset" type="button">Reset</button>
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
    <p>Author: Riabokon Arhip Borisovich<br>
        <a href="mailto:rabokony@icloud.com">rabokony@icloud.com</a></p>
</footer>
</body>
</html>
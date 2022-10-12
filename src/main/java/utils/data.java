package utils;

import java.io.Serializable;

public class data implements Serializable {

    private String argX,argY, argR, curTime, exeTime, result, session, color;

    public data() {
    }

    public String getArgX() {
        return argX;
    }

    public void setArgX(String argX) {
        this.argX = argX;
    }

    public String getArgY() {
        return argY;
    }

    public void setArgY(String argY) {
        this.argY = argY;
    }

    public String getArgR() {
        return argR;
    }

    public void setArgR(String argR) {
        this.argR = argR;
    }

    public String getCurTime() {
        return curTime;
    }

    public void setCurTime(String curTime) {
        this.curTime = curTime;
    }

    public String getExeTime() {
        return exeTime;
    }

    public void setExeTime(String exeTime) {
        this.exeTime = exeTime;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getSession() {
        return session;
    }

    public void setSession(String session) {
        this.session = session;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
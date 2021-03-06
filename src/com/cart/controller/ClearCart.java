package com.cart.controller;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/ClearCart")
public class ClearCart extends HttpServlet {
	private static final long serialVersionUID = 1L;
       


    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
    	
    	String action = req.getParameter("action");
    	
    	if(action.equals("CLEAR")){
    		Enumeration em = req.getSession().getAttributeNames();
    		while(em.hasMoreElements()){
    		req.getSession().removeAttribute(em.nextElement().toString());
    		}

            //重定向
            res.sendRedirect(req.getContextPath()+"/front_end/cart/shop.jsp");
            return;   		
    	}
		
        
        if (action.equals("SENDORDER")){
        	try {
        		
	            Thread thread = Thread.currentThread();
	            thread.sleep(1500);//在頁面停止1.5秒後 跳轉回商城
	            
	            Enumeration em = req.getSession().getAttributeNames();
	    		while(em.hasMoreElements()){
	    		req.getSession().removeAttribute(em.nextElement().toString());
	    		}
	            //重定向
	    		System.out.println("SENDORDER ok");
	            res.sendRedirect(req.getContextPath()+"/front_end/GP4_html_cf/sent_order.html");
	            return; 
  
	        }catch (InterruptedException e) {
	            e.printStackTrace();
	        }

        }
   
         
    }

}

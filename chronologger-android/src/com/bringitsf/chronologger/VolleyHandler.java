package com.bringitsf.chronologger;

import org.json.JSONObject;

import android.content.Context;

import com.android.volley.RequestQueue;
import com.android.volley.Response.ErrorListener;
import com.android.volley.Response.Listener;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

// Enum singleton
public enum VolleyHandler {
    INSTANCE;
    
    private static RequestQueue mRequestQueue;
    
    public static void init(Context context) {
        mRequestQueue = Volley.newRequestQueue(context);
    }
    
    public static JsonObjectRequest sendRequest(int method, String url, JSONObject json,
                                                    Listener<JSONObject> listener, ErrorListener errorListener) {
        JsonObjectRequest jsonRequest = new JsonObjectRequest(method, url, json, listener, errorListener);
        mRequestQueue.add(jsonRequest);
        return jsonRequest;
    }
    
}

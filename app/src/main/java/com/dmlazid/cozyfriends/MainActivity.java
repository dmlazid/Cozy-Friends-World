package com.dmlazid.cozyfriends;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.webkit.WebViewAssetLoader;
import java.io.ByteArrayInputStream;

/** Offline game shell. Only packaged assets are allowed; there is no network permission. */
public class MainActivity extends Activity {
    private WebView game;
    @SuppressLint("SetJavaScriptEnabled")
    @Override public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        game = new WebView(this);
        game.setBackgroundColor(0xfffffaf2);
        game.getSettings().setJavaScriptEnabled(true);
        game.getSettings().setDomStorageEnabled(true);
        game.getSettings().setAllowFileAccess(false);
        game.getSettings().setAllowContentAccess(false);
        game.getSettings().setMediaPlaybackRequiresUserGesture(true);
        game.getSettings().setSupportZoom(false);
        WebViewAssetLoader loader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();
        game.setWebViewClient(new WebViewClient() {
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                WebResourceResponse asset = loader.shouldInterceptRequest(request.getUrl());
                // Module scripts require a JavaScript MIME type, including the .mjs extension.
                if (asset != null && request.getUrl().getPath() != null && request.getUrl().getPath().endsWith(".mjs")) {
                    asset.setMimeType("text/javascript");
                }
                return asset != null ? asset : new WebResourceResponse("text/plain", "UTF-8", 403, "Blocked", null, new ByteArrayInputStream(new byte[0]));
            }
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return !"appassets.androidplatform.net".equals(request.getUrl().getHost());
            }
        });
        setContentView(game);
        immersive();
        game.loadUrl("https://appassets.androidplatform.net/assets/game/index.html");
    }
    private void immersive() {
        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            | View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
    }
    @Override public void onWindowFocusChanged(boolean focused) { super.onWindowFocusChanged(focused); if (focused) immersive(); }
    @Override protected void onPause() {
        if (game != null) { game.evaluateJavascript("window.cozyPause && window.cozyPause()", null); game.onPause(); }
        super.onPause();
    }
    @Override protected void onResume() { super.onResume(); if (game != null) { game.onResume(); immersive(); } }
    @Override public void onBackPressed() {
        game.evaluateJavascript("window.cozyBack ? window.cozyBack() : false", handled -> {
            if (!"true".equals(handled)) moveTaskToBack(true);
        });
    }
    @Override protected void onDestroy() { if (game != null) { game.destroy(); game = null; } super.onDestroy(); }
}

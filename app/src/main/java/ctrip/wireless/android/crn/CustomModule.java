package ctrip.wireless.android.crn;

import android.os.Bundle;
import android.widget.Toast;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.bridge.WritableMap;
import com.jph.takephoto.app.TakePhoto;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

import ctrip.wireless.android.crn.tool.CRNHelper;
import ctrip.wireless.android.crn.tool.ShareHelper;
import ctrip.wireless.android.crn.tool.TakePhotoHelper;
import ctrip.wireless.android.crn.tool.WeixinPayHelper;
import ctrip.wireless.android.crn.ui.CBaseActivity;

/**
 * @author fuchao
 * @date 2019-05-05.
 */

public class CustomModule extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public CustomModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "CustomModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void startCRNBaseActivity(String url, String initParams) {
//        String test = "{\"user\":\"fuc_test\",\"id\":\"688\"}";
//        JSONObject object=new JSONObject();
//        object.put("user","aaaa");
//        object.put("id","9999");
//        initParams = object.toJSONString();
        CRNHelper.startCRNBaseActivity(getCurrentActivity(), url, initParams);
    }

    @ReactMethod
    public void share(String title, String content) {
        ShareHelper.showShare(getCurrentActivity(), title, content);
    }


    @ReactMethod
    public void startWebViewActivity(String url) {
        CRNHelper.startWebViewActivity(getCurrentActivity(), url);
    }

    @ReactMethod
    public void weixinPay(String s) {
        WeixinPayHelper.wechatPay(getCurrentActivity());
    }


    @ReactMethod
    public void takePhoto() {
        TakePhoto takePhoto = ((CBaseActivity) getCurrentActivity()).getTakePhoto();
        TakePhotoHelper.onPickFromCapture(takePhoto);
    }
}

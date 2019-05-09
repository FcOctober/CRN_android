package ctrip.wireless.android.crn.tool;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.Nullable;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import ctrip.wireless.android.crn.CRNBaseActivity;
import ctrip.wireless.android.crn.core.CRNURL;
import ctrip.wireless.android.crn.core.PackageManager;
import ctrip.wireless.android.crn.ui.CBaseActivity;
import ctrip.wireless.android.crn.ui.WebViewActivity;

/**
 * @author fuchao
 * @date 2019-04-30.
 * 跳转activity分为3类
 * 1.跳转原生界面
 * 2.跳转webview界面(url地址)
 * 3.跳转路由界面(rn)
 */

public class CRNHelper {


    /**
     * 跳转路由界面(rn)
     *
     * @param context
     * @param url
     */
    public static void startCRNBaseActivity(Context context, String url, String initParams) {
        Log.e("startCRNBaseActivity", url);
        if (!CRNURL.isCRNURL(url)) {
            Toast.makeText(context, "CRN URL is illegal!", Toast.LENGTH_SHORT).show();
            return;
        }
        CRNURL crnurl = new CRNURL(url);
        crnurl.initParams = initParams;
        if (crnurl.getRnSourceType() != CRNURL.SourceType.Online) {
            PackageManager.installPackageForProduct(crnurl.getProductName());
        }
        Intent intent = new Intent(context, CBaseActivity.class);
        intent.putExtra(CRNBaseActivity.INTENT_COMPONENT_NAME, crnurl);
        context.startActivity(intent);
    }

    public static void startWebViewActivity(Context context, String url) {
        Log.e("startWebViewActivity", "null");
        Intent intent = new Intent(context, WebViewActivity.class);
        context.startActivity(intent);
    }

    public static void startTakePhotoActivity(Context context) {
        Log.e("TakePhotoActivity", "=>");
        Intent intent = new Intent(context, CBaseActivity.class);
        context.startActivity(intent);
    }

    // 发送事件
    public static void sendEvent(ReactContext reactContext,
                                 String eventName,
                                 @Nullable WritableMap params) {
        if (reactContext != null) {
            reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, params);
        }
    }

}

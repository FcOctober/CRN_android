package ctrip.wireless.android.crn.tool;

import android.content.Context;

import com.tencent.mm.opensdk.constants.Build;
import com.tencent.mm.opensdk.modelpay.PayReq;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

import ctrip.wireless.android.crn.Constants;

/**
 * @author fuchao
 * @date 2019-05-08.
 */

public class WeixinPayHelper {
    private static IWXAPI iwxapi;

    private static void initWXAPI(Context context) {
        if (iwxapi == null) {
            iwxapi = WXAPIFactory.createWXAPI(context, Constants.APP_ID);
            iwxapi.registerApp(Constants.APP_ID);
        }
    }


    public static boolean wechatPay(Context context) {
        initWXAPI(context);

        if (iwxapi.getWXAppSupportAPI() < Build.PAY_SUPPORTED_SDK_INT) {
            return false;
        }

        PayReq request = new PayReq();
        request.appId = Constants.APP_ID;
        request.partnerId = "1900000109";
        request.prepayId = "1101000000140415649af9fc314aa427";
        request.packageValue = "Sign=WXPay";
        request.nonceStr = "1101000000140429eb40476f8896f4c9";
        request.timeStamp = "1398746574";
        request.sign = "7FFECB600D7157C5AA49810D2D8F28BC2811827B";

        if (!request.checkArgs()) {
            return false;
        }
        iwxapi.sendReq(request);

        return true;
    }
}

package ctrip.wireless.android.crn.wxapi;


import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.tencent.mm.opensdk.constants.ConstantsAPI;
import com.tencent.mm.opensdk.modelbase.BaseReq;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.modelpay.PayResp;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

import ctrip.wireless.android.crn.Constants;
import ctrip.wireless.android.crn.tool.DialogUtils;
import ctrip.wireless.android.crn.tool.ToastUtil;

public class WXPayEntryActivity extends Activity implements IWXAPIEventHandler {

    private static final String TAG = WXPayEntryActivity.class.getSimpleName();
    private IWXAPI api;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.e(TAG, "进入了支付结果界面");
        api = WXAPIFactory.createWXAPI(WXPayEntryActivity.this, Constants.APP_ID);
        api.handleIntent(getIntent(), WXPayEntryActivity.this);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        api.handleIntent(intent, this);
    }

    @Override
    public void onReq(BaseReq req) {
        Log.e(TAG, "req==>" + req.toString());
    }

    @Override
    public void onResp(BaseResp resp) {

        if (resp.getType() == ConstantsAPI.COMMAND_PAY_BY_WX) {
            int orderResult = resp.errCode;
            switch (resp.errCode) {
                case PayResp.ErrCode.ERR_OK:
                    ToastUtil.showMessage(this, "支付成功");
                    break;
                case PayResp.ErrCode.ERR_COMM:
                    //可能的原因：签名错误、未注册APPID、项目设置APPID不正确、注册的APPID与设置的不匹配、其他异常等。
                    ToastUtil.showMessage(this, "支付失败");
                    break;
                case PayResp.ErrCode.ERR_USER_CANCEL:
                    ToastUtil.showMessage(this, "用户取消");
                    break;
                case PayResp.ErrCode.ERR_SENT_FAILED:
                    ToastUtil.showMessage(this, "发送失败");
                    break;
                case PayResp.ErrCode.ERR_AUTH_DENIED:
                    ToastUtil.showMessage(this, "授权被拒绝");
                    break;
                case PayResp.ErrCode.ERR_UNSUPPORT:
                    ToastUtil.showMessage(this, "不支持");
                    break;
            }
            Log.e(TAG, "orderResult===>" + orderResult);
//            DataSource.setPay_result(orderResult);
//            api.unregisterApp();
//            api.detach();
//            api = null;
            finish();
        }
    }
}


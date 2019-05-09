package ctrip.wireless.android.crn.wxapi;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.tencent.mm.opensdk.constants.ConstantsAPI;
import com.tencent.mm.opensdk.modelbase.BaseReq;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.modelmsg.SendAuth;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

import ctrip.wireless.android.crn.Constants;


public class WXEntryActivity extends Activity implements IWXAPIEventHandler {


    private IWXAPI api;
    private String[] WX_AUTH_STATE_MSG = new String[]{"授权成功", "取消授权", "授权拒绝"};
    private String[] WX_SHARE_STATE_MSG = new String[]{"分享成功", "取消分享", "分享拒绝"};

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        api = WXAPIFactory.createWXAPI(this, Constants.APP_ID, true);
        api.registerApp(Constants.APP_ID);

        api.handleIntent(getIntent(), this);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);

        setIntent(intent);
        api.handleIntent(intent, this);
    }

    @Override
    public void onReq(BaseReq req) {
        switch (req.getType()) {
            case ConstantsAPI.COMMAND_GETMESSAGE_FROM_WX:
                break;
            case ConstantsAPI.COMMAND_SHOWMESSAGE_FROM_WX:
                break;
            default:
                break;
        }

    }

    @Override
    public void onResp(BaseResp resp) {
        dispathWxMessage(resp);
        finish();
    }

    /**
     * 分发处理消息
     *
     * @param resp
     */
    private void dispathWxMessage(BaseResp resp) {
        int type = resp.getType();
        int errCode = resp.errCode;

        String[] stateMsg = WX_AUTH_STATE_MSG;
        switch (type) {
            case 1:
                String code = ((SendAuth.Resp) resp).code;
//                DataSource.setWechat_code(code);
                break;
            case 2:
                stateMsg = WX_SHARE_STATE_MSG;
                break;
        }

        String result;
        switch (errCode) {
            case BaseResp.ErrCode.ERR_OK:
                result = stateMsg[0];
                break;
            case BaseResp.ErrCode.ERR_USER_CANCEL:
                result = stateMsg[1];
                break;
            case BaseResp.ErrCode.ERR_AUTH_DENIED:
                result = stateMsg[2];
                break;
            default:
                result = "不明异常";
                break;
        }

        Toast.makeText(this, result, Toast.LENGTH_LONG).show();
//        EventBus.getDefault().post(new ShareResumeEvent());
    }
}


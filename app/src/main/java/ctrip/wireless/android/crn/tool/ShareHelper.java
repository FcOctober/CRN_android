package ctrip.wireless.android.crn.tool;

import android.content.Context;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

import java.util.HashMap;

import cn.sharesdk.framework.Platform;
import cn.sharesdk.framework.PlatformActionListener;
import cn.sharesdk.onekeyshare.OnekeyShare;
import ctrip.wireless.android.crn.ui.CBaseActivity;

/**
 * @author fuchao
 * @date 2019-05-08.
 */

public class ShareHelper {

    public static void showShare(Context context, String title, String content) {
        OnekeyShare oks = new OnekeyShare();
        //关闭sso授权
        oks.disableSSOWhenAuthorize();

        // title标题，微信、QQ和QQ空间等平台使用
        oks.setTitle(title);
        // titleUrl QQ和QQ空间跳转链接
        oks.setTitleUrl("http://sharesdk.cn");
        // text是分享文本，所有平台都需要这个字段
        oks.setText(content);
        // imagePath是图片的本地路径，Linked-In以外的平台都支持此参数
        oks.setImagePath("/sdcard/test.jpg");//确保SDcard下面存在此张图片
        // url在微信、微博，Facebook等平台中使用
        oks.setUrl("http://sharesdk.cn");
        // comment是我对这条分享的评论，仅在人人网使用
        oks.setComment("我是测试评论文本");

        final CBaseActivity cBaseActivity = ((CBaseActivity) context);

        oks.setCallback(new PlatformActionListener() {
            @Override
            public void onComplete(Platform platform, int i, HashMap<String, Object> hashMap) {
                // 发送更新事件
                WritableMap params = Arguments.createMap();
                params.putString("message", "share onComplete");
                CRNHelper.sendEvent(cBaseActivity.getReactInstanceManager().getCurrentReactContext(), "share", params);

            }

            @Override
            public void onError(Platform platform, int i, Throwable throwable) {
                WritableMap params = Arguments.createMap();
                params.putString("message", "share onError");
                CRNHelper.sendEvent(cBaseActivity.getReactInstanceManager().getCurrentReactContext(), "share", params);
            }

            @Override
            public void onCancel(Platform platform, int i) {
                WritableMap params = Arguments.createMap();
                params.putString("message", "share onCancel");
                CRNHelper.sendEvent(cBaseActivity.getReactInstanceManager().getCurrentReactContext(), "share", params);
            }
        });

        // 启动分享GUI
        oks.show(context);
    }

}

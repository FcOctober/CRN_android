package ctrip.wireless.android.crn.tool;

import android.content.Context;
import android.content.res.Resources.NotFoundException;
import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import android.widget.Toast;

/**
 * Toast
 */
public class ToastUtil {
    private static Handler handler = new Handler(Looper.getMainLooper());
    private static Toast toast = null;
    private static Object synObj = new Object();

    public static void showMessage(final Context act, final String msg) {
        showMessage(act, msg, Toast.LENGTH_SHORT);
    }

    public static void showMessage(final Context act, final int msg) {
        showMessage(act, msg, Toast.LENGTH_SHORT);
    }

    public static void showMessageLong(final Context act, final String msg) {
        showMessage(act, msg, Toast.LENGTH_LONG);
    }

    public static void showMessageLong(final Context act, final int msg) {
        showMessage(act, msg, Toast.LENGTH_LONG);
    }

    private static void showMessage(final Context act, final String msg,
                                    final int len) {
        if(TextUtils.isEmpty(msg)){
            return;
        }
        if(act == null){
            return;
        }
        final  Context context = act.getApplicationContext();
        new Thread(new Runnable() {
            @Override
            public void run() {
                handler.post(new Runnable() {
                    @Override
                    public void run() {
                        synchronized (synObj) {
                            if (toast != null) {
                                // toast.cancel();
                                toast.setText(msg);
                                toast.setDuration(len);
                            } else {
                                toast = Toast.makeText(context.getApplicationContext(), msg, len);
                            }
                            toast.show();
                        }
                    }
                });
            }
        }).start();
    }

    /**
     * @author gavin
     * @date 2012-6-15 上午10:10:52
     * @param act
     * @param msg
     * @param len
     *            资源对应的id
     */
    private static void showMessage(final Context act, final int msg,
                                    final int len) {
        final  Context context  = act.getApplicationContext();
        new Thread(new Runnable() {
            @Override
            public void run() {
                handler.post(new Runnable() {
                    @Override
                    public void run() {
                        synchronized (synObj) {
                            if (toast != null) {
                                // toast.cancel();
                                toast.setText(msg);
                                toast.setDuration(len);
                            } else {
                                try {
                                    toast = Toast.makeText(context, msg, len);
                                } catch (NotFoundException e) {
                                    e.printStackTrace();
                                }
                            }
                            toast.show();
                        }
                    }
                });
            }
        }).start();
    }

    public static void dissMessage() {
        if (toast != null){
            toast.cancel();
            handler.removeCallbacks(null);
        }
    }
}

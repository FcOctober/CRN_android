package ctrip.wireless.android.crn.tool;//


import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.Context;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;

public class DialogUtils {
    public DialogUtils() {
    }

    public static void ShowTips(Context context, String title, String msg, String positiveStr, String negativeStr, OnClickListener positive, OnClickListener negative) {
        Builder builder = (new Builder(context)).setTitle(title).setMessage(msg);
        if (positive != null) {
            builder = builder.setPositiveButton(positiveStr, positive);
        }

        if (negative != null) {
            builder = builder.setNegativeButton(negativeStr, negative);
        }

        builder.create().show();
    }

    public static void ShowTips(Context context, String title, String msg, OnClickListener positive, OnClickListener negative) {
        Builder builder = (new Builder(context)).setTitle(title).setMessage(msg);
        if (positive != null) {
            builder = builder.setPositiveButton("确认", positive);
        }

        if (negative != null) {
            builder = builder.setNegativeButton("取消", negative);
        }

        builder.create().show();
    }


    public static void ShowTips(Context context, String msg, OnClickListener positive, OnClickListener negative) {
        Builder builder = (new Builder(context)).setTitle("温馨提示").setMessage(msg);
        if (positive != null) {
            builder = builder.setPositiveButton("确认", positive);
        }

        if (negative != null) {
            builder = builder.setNegativeButton("取消", negative);
        }

        builder.create().show();
    }

    public static void ShowTips(Context context, String msg, String positiveText, String negativeText, OnClickListener positive, OnClickListener negative) {
        Builder builder = (new Builder(context)).setTitle("温馨提示").setMessage(msg);
        if (positive != null) {
            builder = builder.setPositiveButton(positiveText, positive);
        }

        if (negative != null) {
            builder = builder.setNegativeButton(negativeText, negative);
        }

        builder.create().show();
    }

    public static void ShowCopyCompleteDialog(Context context) {
        Builder builder = (new Builder(context)).setTitle("保存图文").setMessage("图片已保存至相册,文字已复制");
        builder = builder.setPositiveButton("确认", new OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
            }
        });
        builder.create().show();
    }

    public static void ShowTips(Context context, String msg, OnClickListener positive, OnClickListener negative, boolean bCanCancled) {
        Builder builder = (new Builder(context)).setTitle("温馨提示").setMessage(msg);
        if (positive != null) {
            builder = builder.setPositiveButton("确认", positive);
        }

        if (negative != null) {
            builder = builder.setNegativeButton("取消", negative);
        }

        AlertDialog dialog = builder.create();
        dialog.setCancelable(bCanCancled);
        dialog.setCanceledOnTouchOutside(bCanCancled);
        dialog.show();
    }

    public static void ShowTips(Context context, String msg) {
        Builder builder = (new Builder(context)).setTitle("温馨提示").setMessage(msg);
        builder = builder.setPositiveButton("确认", null);

        AlertDialog dialog = builder.create();
        dialog.show();
    }
}

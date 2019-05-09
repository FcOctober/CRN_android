/*
 * Copyright Ctrip.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package ctrip.wireless.android.crn;

import android.app.Application;


import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.mob.MobSDK;

import java.util.Arrays;
import java.util.List;

import ctrip.wireless.android.crn.extend.CRNProvider;
import ctrip.wireless.android.crn.extend.ReactApplication;
import ctrip.wireless.android.crn.extend.ReactNativeHost;

public class BaseApplication extends Application  implements ReactApplication {

    @Override
    public void onCreate() {
        super.onCreate();
        ContextHolder.context = this;
        ContextHolder.version = "1.0.0";
        ContextHolder.debug = true;
        ContextHolder.application = this;

        MobSDK.init(this);

    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost() {


        @Override
        public List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(),
                    new CustomReactPackage()
            );
        }

    };
}

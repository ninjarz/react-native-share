/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { ShareBaseInstance } from './ShareBaseInstance';

export class MessengerShare extends ShareBaseInstance {

  constructor() {
    super("com.facebook.orca", 'fb-messenger://', '123')
  }

}
import React, { useEffect, useState } from 'react';

import { authAsync, selectAuth } from '@/redux/features/auth/authSlice'
import { readLocalStorage } from '@/services/storage.services';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';


import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import type { RadioChangeEvent } from 'antd/es/radio';


const Drawers = () => {
  return (
    <div>
      
    </div>
  )
}

export default Drawers

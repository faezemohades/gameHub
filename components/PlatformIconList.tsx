import { Platform } from '@/hooks/useGames'
import React from 'react'
import {FaWindows,FaPlaystation,FaXbox, FaApple, FaLinux,FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { IconType } from "react-icons";

interface Props{
    platforms:Platform[]
}

const PlatformIconList = ({platforms}:Props) => {
    const iconMap:{[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid
    }
  return (
    <>
        {platforms.map((platform) => {
        const IconComponent = iconMap[platform.name.toLowerCase()]; // Get the corresponding icon component
        return (
          <div key={platform.id}>
            {IconComponent && <IconComponent  />}
          </div>
        );
      })}
    </>
  )
}

export default PlatformIconList
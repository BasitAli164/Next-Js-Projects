import img from '@/assets/img.jpg'
import pic from '@/assets/pic.jpeg'
import darkvsCode from '@/assets/toolImages/vsCode.png';
import darkgit from '@/assets/toolImages/git.png';
import darkmongodb from '@/assets/toolImages/mongodb.png';
import darkpostman from '@/assets/toolImages/postman.png';
import darkoffice from '@/assets/toolImages/office.png';
import darkmySql from '@/assets/toolImages/mySqlServer.png';
import lightvsCode from '@/assets/toolImages/vslight.png'
import ligthgit from '@/assets/toolImages/gitlight.png';
import lightdb from '@/assets/toolImages/lightdb.png';
import lightpost from '@/assets/toolImages/lightpost.png'


export const infoList = [
  {
    icon: pic,
    iconDark: img,
    title: "Language",
    description: "Balti, Urdu, English",
  },
  {
    icon: pic,
    iconDark: img,
    title: "Education",
    description: "BS in Computer Science",
  },
  {
    icon: pic,
    iconDark: img,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];
export const toolsDataDark=[darkvsCode,darkgit,darkmongodb,darkpostman,darkoffice,darkmySql];
export const toolsDataLight=[lightvsCode,ligthgit,lightpost,lightdb,darkmySql,darkoffice]

import Home from '../pages/home/index.jsx'
import { Navigate} from 'react-router-dom'
import Dlzc from '../pages/dlzc'
import Namel from '../pages/namel'
import Emaill from '../pages/emaill'
import Register from '../pages/register'
import Softwaredetail from '../pages/softwaredetail'
import Softwaremsg from '../pages/softwaremsg'
import Licensing from '../pages/licensing'
import Personalcen from '../pages/personalcen'
import Mysoftware from '../pages/mysoftware'
import Myauthorization from '../pages/myauthorization'
import Personalinf from '../pages/personalinf'
import Fingerprint from '../pages/fingerprint'
import MySoftware from '../pages/mysoftware/index.jsx'
import Repairpsw from '../pages/repairpsw/index.jsx'
import Management from '../pages/management/index.jsx'
import VersionInfo from '../pages/versioninfo/index.jsx'
import PermissionHome from '../pages/permissionhome'
import Addsoftware from '../pages/addsoftware/index.jsx'
import Repairsoftware from '../pages/repairsoftware'
import SoftwaremsgM from '../pages/m-softwaremsg'
import VersionimfM from '../pages/m-versionimf'
import AuthorizationM from '../pages/m-authorization'
import Repairversion from '../pages/repairversion'
import Pushnewversion from '../pages/pushnewversion'
import Finger from '../pages/finger'
import Addfinger from '../pages/addfinger'
import All from '../pages/home/contents/all'
import InfoMange from '../pages/home/contents/infoMange'
import RdDesign from '../pages/home/contents/rdDesign'
import ProductControl from '../pages/home/contents/productControl'
import Firmware from '../pages/home/contents/firmware'
import Search from '../pages/home/contents/search'
import MInfoMange from '../pages/permissionhome/contents/infoMange'
import MRdDesign from '../pages/permissionhome/contents/rdDesign'
import MProductControl from '../pages/permissionhome/contents/productControl'
import MFirmware from '../pages/permissionhome/contents/firmware'
import MSearch from '../pages/permissionhome/contents/search'
import MAll from '../pages/permissionhome/contents/all'
import Xuke from '../pages/xuke'
import Addshouquan from '../pages/addshouquan'
import Pushnewfangan from '../pages/pushnewfangan'
import Repairfangan from '../pages/repairfangan'
import News from '../pages/news'
const routes = [
    //登录注册
    {
        path: '/dlzc',
        element: <Dlzc />,
        children: [
            {
                path: 'namel',
                element:<Namel/>,
            },
            {
                path: 'emaill',
                element:<Emaill/>
            },
            {
                path: 'register',
                element:<Register/>
            },
            {
                path: '',
                element: <Navigate to='namel' />
            }
        ]
    },
     //消息
     {
        path: '/news',
        element: <News />,
    },
    //软件详情
    {
        path: '/softwaredetail',
        element:<Softwaredetail/>,
        children: [
            {
                path: 'softwaremsg',
                element:<Softwaremsg/>
            },
            {
                path: 'versioninfo',
                element:<VersionInfo/>
            },
            {
                path: 'licensing',
                element:<Licensing/>
            },
            // {
            //     path: '',
            //     element:<Navigate to='softwaremsg' />
            // },
         ]
    },
    //个人信息
    {
        path: '/personalcen',
        element:<Personalcen/>,
        children: [
            {
                path: 'mysoftware',
                element:<Mysoftware/>
            },
            {
                path: 'myauthorization',
                element:<Myauthorization/>
            },
            {
                path: 'personalinf',
                element:<Personalinf/>
            },
            {
                path: 'fingerprint',
                element:<Fingerprint/>
            },
            {
                path: 'repairpsw',
                element:<Repairpsw/>
            },
            {
                path: 'addfinger',
                element:<Addfinger/>
            },
            {
                path: 'finger',
                element:<Finger/>
            },
            {
                path: 'xuke',
                element:<Xuke/>,
                children:[{
                    path: 'addshouquan',
                    element:<Addshouquan/>
                },
            ]
            },
            {
                path: 'finger',
                element:<Finger/>
            },
            {
                path: '',
                element: <Navigate to='mysoftware' />
            }
         ]
    },
    //Home
    {
        // 主页子导航栏内容
        path:'home',
        element:<Home/>,
        children:[
            {
                path:'all',
                element:<All/>
            },
            {
                path:'infoMange',
                element:<InfoMange/>
            },
            {
                path:'rdDesign',
                element:<RdDesign/>
            },
            {
                path:'productControl',
                element:<ProductControl/>
            },
            {
                path:'firmware',
                element:<Firmware/>
            },
            {
                path:'search',
                element:<Search/>
            },
            {
                path: '',
                element: <Navigate to='all' />
            }
        ]
    },
    //我的软件
    {
        path:'/mysoftware',
        element:<MySoftware/>,
    },
    //管理软件
    {
        path:'/repairsoftware',
        element:<Repairsoftware/>,
        children: [
            {
                path:'softwaremsg-m',
                element:<SoftwaremsgM/>
            },
            {
                path:'versionimf-m',
                element:<VersionimfM/>
            },
            {
                path:'authorization-m',
                element:<AuthorizationM/>,
                children: [{
                    path:'pushnewfangan',
                    element:<Pushnewfangan/>
                },
                {
                    path:'repairfangan',
                    element:<Repairfangan/>
                }
            ]
            },
            {
                path:'repairversion',
                element:<Repairversion/>
            },
            {
                path:'pushnewversion',
                element:<Pushnewversion/>
            },
        ]
    },
    //管理端
    {
        path:'/management',
        element:<Management/>,
        children: [
        {
            path:'addsoftware',
            element:<Addsoftware/>
        },
        {
            path:'manageimf',
            element:<PermissionHome/>,
            children: [
                {
                    path:'all',
                    element:<MAll/>
                },
                {
                    path:'infoMange',
                    element:<MInfoMange/>
                },
                {
                    path:'rdDesign',
                    element:<MRdDesign/>
                },
                {
                    path:'productControl',
                    element:<MProductControl/>
                },
                {
                    path:'firmware',
                    element:<MFirmware/>
                },
                {
                    path:'search',
                    element:<MSearch/>
                },
                {
                    path: '',
                    element: <Navigate to='all' />
                }
            ]
        },
        {
            path: '',
            element: <Navigate to='/management/addsoftware' />
        }
    ]
    },
    //默认
    {
        path: '/',
        element: <Navigate to='/dlzc' />
    }
]


export default routes

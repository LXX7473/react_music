import Discover from '@/pages/discover'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'

const router=[

    {
        path:'/',
        exact:true,
        component:Discover
    },
    {
        path:'/friend',
        exact:true,
        component:Friend
    },{
        path:'/mine',
        exact:true,
        component:Mine
    },

]
export default router
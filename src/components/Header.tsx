import {Link, useLocation} from 'react-router-dom';
const  Header = () => {
    const location = useLocation();

    const  pathHeader=[
        {
            name:'Nhà bán',
            code:'nha-ban'
        },
        {
            name:'Nhà cho thuê',
            code:'nha-cho-thue'
        },
        {
            name:'Dự án',
            code:'du-an'
        },
        

    ]
    return (
        <div className={'mt-4  sticky top-0 z-[999] bg-white ' }>

            <div className="flex items-center gap-10 h-[60px] py-2 px-2 ">
                <Link to={'/'} className="ml-5">
                    <img src="	https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
                         className={'w-[160px]'} alt=""/>
                </Link>
                {
                    pathHeader.map((item,index)=>(
                        <Link to={`/${item.code}`} key={index} className="">
                            <div className={
                              `text-base font-medium mb-2 hover:border-b-[2px] hover:border-b-red-700 ${location.pathname.includes(item.code) ? 'border-b-[2px] border-red-700' : ''}`
                            }>{item.name}</div>
                        </Link>
                    ))
                }


            </div>

        </div>
    )

}

export  default  Header;